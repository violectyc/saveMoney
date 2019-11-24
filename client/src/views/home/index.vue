<template>
    <div class="home">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>报表</span>
            </div>
            <div class="home-search-wrap">
                <el-form ref="form" label-width="80px">
                    <el-row :gutter="10">
                        <el-col :span="6">
                            <el-form-item label="总支出">
                                <el-input class="no-border" v-model="inCome"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="总结余">
                                <el-input class="no-border" v-model="aggre"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="查询时间">
                                <el-date-picker @change="handleDate"
                                                v-model="searchDate"
                                                type="month"
                                                value-format="yyyy-MM"
                                                placeholder="选择日期">
                                </el-date-picker>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="支付类型">
                                <el-input placeholder="placeholder"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
            <div class="chart-wrap">
                <el-row :gutter="10">
                    <el-col :span="12">
                        <Pie :pipeData="pipeData"/>
                    </el-col>
                    <el-col :span="12">
                        <Lin/>
                    </el-col>
                </el-row>
            </div>
        </el-card>
    </div>
</template>

<script>
    import Pie from '../../components/pie'
    import Lin from '../../components/line'
    import {getChart} from '../../service'

    export default {
        name: "home",
        data() {
            return {
                searchDate: new Date().getFullYear() + '-' + (new Date().getMonth() + 1),
                inCome: 0,
                aggre: 0,
                typeSelect: [
                    {
                        value: '',
                        label: ''
                    }
                ],
                pipeData: []
            }
        },
        components: {
            Pie, Lin
        },
        mounted() {
            this.getChartData();
        },
        methods: {
            handleDate() {
                console.log(this.searchDate);
                this.getChartData();
            },
            getChartData() {
                const parm = {date: this.searchDate};
                getChart(parm).then(res => {
                    console.log(res.data);
                    this.pipeData = res.data.data;
                    this.inCome = res.data.inCome;
                    this.aggre = res.data.aggre;
                })
            }
        }
    }
</script>

<style scoped>
    .home .no-border /deep/ input {
        border: none !important;
    }

    .home {
        width: 100%;
        height: 100%;

    }
</style>
