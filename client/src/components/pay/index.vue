<template>
    <div class="wrap">
        <el-form label-width="80px">
            <el-form-item label="支出金额">
                <el-input v-model="pay.payNumber" placeholder="0" clearable></el-input>
            </el-form-item>
            <el-form-item label="支付类型">
                <el-radio-group v-model="pay.payType">
                    <el-radio-button label="医疗"></el-radio-button>
                    <el-radio-button label="交通"></el-radio-button>
                    <el-radio-button label="购物"></el-radio-button>
                    <el-radio-button label="娱乐"></el-radio-button>
                    <el-radio-button label="居住"></el-radio-button>
                    <el-radio-button label="餐饮"></el-radio-button>
                    <el-radio-button label="教育"></el-radio-button>
                    <el-radio-button label="人情"></el-radio-button>
                    <el-radio-button label="花呗"></el-radio-button>
                    <el-radio-button label="零食"></el-radio-button>
                    <el-radio-button label="其他"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="支付方式">
                <el-radio-group v-model="pay.payMethod">
                    <el-radio-button label="现金"></el-radio-button>
                    <el-radio-button label="储蓄卡"></el-radio-button>
                    <el-radio-button label="信用卡"></el-radio-button>
                    <el-radio-button label="支付宝"></el-radio-button>
                    <el-radio-button label="微信钱包"></el-radio-button>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="支付时间">
                <el-date-picker v-model="pay.Created"
                                type="date"
                                value-format="yyyy-MM-dd"
                                placeholder="选择日期" clearable>
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
        name: "pay",
        data() {
            return {
                // pay: {
                //     payNumber: 0,
                //     payMethod: '现金',
                //     payType: '医疗',
                //     Created: new Date(new Date().getTime()),
                //     reMark: ''
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

<style scoped lang="less">

</style>
