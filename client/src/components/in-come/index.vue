<template>
    <div class="wrap">
        <el-form label-width="80px">
            <el-form-item label="收入金额">
                <el-input v-model="pay.payNumber" clearable></el-input>
            </el-form-item>
            <el-form-item label="收入类型">
                <el-radio-group v-model="pay.payType">
                    <el-radio-button label="借入款"></el-radio-button>
                    <el-radio-button label="工资"></el-radio-button>
                    <el-radio-button label="兼职"></el-radio-button>
                    <el-radio-button label="报销"></el-radio-button>
                    <el-radio-button label="奖金"></el-radio-button>
                    <el-radio-button label="投资收益"></el-radio-button>
                    <el-radio-button label="红包"></el-radio-button>
                    <el-radio-button label="其他"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="收入方式">
                <el-radio-group v-model="pay.payMethod">
                    <el-radio-button label="现金"></el-radio-button>
                    <el-radio-button label="储蓄卡"></el-radio-button>
                    <el-radio-button label="信用卡"></el-radio-button>
                    <el-radio-button label="支付宝"></el-radio-button>
                    <el-radio-button label="微信钱包"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="收入时间">
                <el-date-picker v-model="pay.Created"
                                type="date"
                                placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="备注">
                <el-input type="textarea" :rows="10" v-model="pay.reMark"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import {mapState} from "vuex";

    export default {
        name: "in-come",
        data() {
            return {
                // pay: {
                //     number: 0,
                //     payType: '医疗',
                //     payMethod:'现金',
                //     date: '',
                //     remark: ''
                // }
            }
        },
        watch: {
            pay: {
                handler: function (n, o) {
                    this.$store.commit('setPay', n);
                },
                deep: true,
                immediate: true
            }
        },
        computed: {
            ...mapState(['pay'])
        }

    }
</script>
<style scoped>

</style>
