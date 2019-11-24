<template>
    <div class="wrap">
        <div class="line-wrap">
            <div class="line-dom" ref="line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lin",
        mounted() {
            this.initChart();
        },
        methods: {
            initChart() {
                const myChart = this.$echarts.init(this.$refs.line);
                myChart.setOption({
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                });
            }
        }
    }
</script>

<style scoped lang="less">
    .line-dom {
        width: 100%;
        min-height: 500px;
    }
</style>
