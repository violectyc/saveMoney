<template>
    <div class="home">
        <el-container>
            <el-aside width="200px">
                <Menu/>
            </el-aside>
            <el-container>
                <el-header><NavHeader/></el-header>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Menu from '@/components/menu'
    import NavHeader from '@/components/header'

    export default {
        name: 'home',
        components: {Menu, NavHeader}
    }
</script>
<style>
    .home {
        height: 100%;
    }

    .el-header, .el-footer {

    }

    .el-aside {
        background-color: #545c64;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
    }

    .el-container {
        height: 100%;
    }
</style>
