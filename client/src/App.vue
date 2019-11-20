<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: 'app',
        mounted() {
            this.$store.commit('setUser', JSON.parse(localStorage.getItem('user')));
        }
    }
</script>
<style lang="less">
    clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
</style>
