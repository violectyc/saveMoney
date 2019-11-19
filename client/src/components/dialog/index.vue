<template>
    <div class="wrap">
        <el-dialog :visible="dialogFormVisible" @close="handleCancle">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="支出" name="pay" :disabled="isDesiable">
                    <Pay/>
                </el-tab-pane>
                <el-tab-pane label="收入" name="income" :disabled="isDesiable">
                    <InCome/>
                </el-tab-pane>
                <el-tab-pane label="转账" name="transform" :disabled="isDesiable">转账</el-tab-pane>
            </el-tabs>
            <div slot="footer" class="dialog-footer">
                <el-button @click="handleCancle">取 消</el-button>
                <el-button type="primary" @click="handleCreateRecord">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Pay from '../pay'
    import InCome from '../in-come'
    import {addRecord, editOneById} from '../../service'
    import {mapState} from 'vuex'

    export default {
        name: "myDialog",
        components: {Pay, InCome},
        data() {
            return {
                activeName: 'pay',
                type: 0,
                FormVisible: this.dialogFormVisible,
            }
        },
        props: {
            dialogFormVisible: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            ...mapState(['pay', 'isEdit']),
            isDesiable() {
                return this.isEdit === 0 ? true : false;
            }
        },
        methods: {
            handleCancle() {
                this.$emit('handleClose', 1)
            },
            handleCreateRecord() {
                if (this.isEdit === 0) {
                    this._editOneById();
                } else {
                    this.createRecord();
                }
            },
            handleClick(tab, event) {
                this.activeName = tab.name;
                console.log(this.activeName);
            },
            createRecord() {
                const opertionType = this.getType();
                const tmp = Object.assign({}, this.pay, {opertionType});
                addRecord({tmp}).then(res => {
                    const {errCode, msg} = res.data;
                    if (errCode === 0) {
                        this.$message({
                            message: msg,
                            type: 'success'
                        });
                        this.$emit('handleClose', 0);
                    } else {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }
                });
            },
            _editOneById() {
                const opertionType = this.getType();
                const tmp = Object.assign({}, this.pay, {opertionType});
                editOneById({tmp}).then(res => {
                    const {errCode, msg} = res.data;
                    if (errCode === 0) {
                        this.$message({
                            message: msg,
                            type: 'success'
                        });
                        this.$emit('handleClose', 0);
                    } else {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }
                })
            },
            getType() {
                switch (this.activeName) {
                    case "pay":
                        return 0;
                    case "income":
                        return 1;
                    case "transform":
                        return 2;
                    default:
                        return 0;
                }
            }
        }
    }
</script>

<style scoped lang="less">

</style>
