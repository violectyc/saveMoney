<template>
    <div class="wrap">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <div class="create-header">
                    <span>收支记录</span>
                    <el-button type="primary" @click="handleOpenDialog">记一笔</el-button>
                </div>
            </div>
            <div>
            </div>
            <div class="booking-record">
                <el-table
                        :data="tableData"
                        style="width: 100%" align="center">
                    <el-table-column
                            label=""
                            width="180">
                        <template slot-scope="scope">
                            <div class="circle"
                                 :style="{'background':scope.row.opertionType === 0 ? '#F56C6C':'#67C23A'}"></div>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="金额"
                            width="180">
                        <template slot-scope="scope">
                            <span :style="{'color':scope.row.opertionType === 0 ? '#F56C6C':'#67C23A'}">{{scope.row.opertionType===0?'-':'+'}}{{scope.row.payNumber}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            label="支付日期"
                            width="180">
                        <template slot-scope="scope">
                            <span>{{scope.row.Created|format}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column
                            prop="payMethod"
                            label="支付方式"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="payType"
                            label="用途"
                            width="180">
                    </el-table-column>
                    <el-table-column
                            prop="reMark"
                            label="备注">
                    </el-table-column>
                    <el-table-column
                            prop="操作"
                            label="操作">
                        <template slot-scope="scope">
                            <div>
                                <el-button type="primary" @click="editRecordOne(scope.row)">编辑</el-button>
                                <el-button type="danger" @click="deleteOne(scope.row)">删除</el-button>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <MyDialog :dialogFormVisible="dialogFormVisible" @handleClose="handleClose"/>
    </div>
</template>

<script>
    import MyDialog from '../../components/dialog'
    import {getRecordList, deleteOneById} from "../../service";
    import moment from "moment";

    export default {
        name: "booking",
        data() {
            return {
                dialogFormVisible: false,
                tableData: []
            }
        },
        components: {
            MyDialog
        },
        filters: {
            format(val) {
                return moment(val).format('YYYY-MM-DD');
            }
        },
        mounted() {
            this._getRecordList();
        },
        methods: {
            handleOpenDialog() {
                this.dialogFormVisible = true;
                this.$store.commit('setEdit', 1)
            },
            handleClose(val) {
                this.dialogFormVisible = false;
                if (val === 0) {
                    this._getRecordList();
                }
                this.$store.commit('setPay', {});
            },
            editRecordOne(record) {
                const n = record;
                this.$store.commit('setPay', n);
                this.dialogFormVisible = true;
                this.$store.commit('setEdit', 0);
            },
            deleteOne(record) {
                this.$confirm('此操作将永久删除该条记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this._deleteOneById(record._id);
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            _deleteOneById(id) {
                deleteOneById({id}).then(res => {
                    const {errCode, data, msg} = res.data;
                    if (errCode === 0) {
                        this.$message({
                            message: msg,
                            type: 'success'
                        });
                        this._getRecordList();
                    } else {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }
                });
            },
            _getRecordList() {
                getRecordList().then(res => {
                    const {errCode, msg, data} = res.data;
                    if (errCode === 0) {
                        console.log(data);
                        this.tableData = data;
                    } else {
                        this.$message({
                            message: msg,
                            type: 'error'
                        });
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .wrap {
        width: 100%;
        height: 100%;

        .create-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .circle {
            width: 10px;
            height: 10px;
            background: red;
            border-radius: 50%;
        }
    }
</style>
