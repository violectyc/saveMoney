<template>
    <div id="app">
        <router-view/>
    </div>
</template>

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
