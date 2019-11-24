<template>
    <div class="wrap">
        <div class="pie">
            <div class="pie-dom" ref="pie"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "pipe",
        props: {
            pipeData: {
                type: Array,
                default: []
            }
        },
        watch: {
            pipeData: {
                handler: function (n) {
                    this.initEcharts();
                },
                deep: true
            }
        },
        data() {
            return {
                list: []
            }
        },
        methods: {
            initEcharts() {
                const myChart = this.$echarts.init(this.$refs.pie);
                myChart.setOption({
                    title: {
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    series: [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            center: ['50%', '60%'],
                            data: this.pipeData,
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
            }
        },

    }
</script>

<style scoped lang="less">
    .pie-dom {
        width: 100%;
        min-height: 500px;
    }
</style>
