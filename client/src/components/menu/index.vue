<template>
    <div class="wrap">
        <el-menu
                :default-active="activeIndex"
                text-color="#fff"
                background-color="#545c64"
                active-text-color="#409EFF">
            <el-menu-item index="1">
                <router-link to="/home" tag="div"><i class="el-icon-menu"></i>
                    <span>资产</span></router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <router-link to="/booking" tag="div">
                    <i class="el-icon-menu"></i>
                    <span>记账</span>
                </router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <router-link to="/me" tag="div">
                    <i class="el-icon-menu"></i>
                    <span>我的</span>
                </router-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                activeIndex: "1"
            }
        },
        watch: {
            $route: {
                handler: function (n) {
                    if (n.path === '/home') {
                        this.activeIndex = "1";
                    } else if (n.path === '/booking') {
                        this.activeIndex = "2"
                    } else if (n.path === '/me') {
                        this.activeIndex = "3"
                    }
                },
                deep: true,
                immediate:true
            }
        }
    }
</script>

<style scoped>
    .wrap {
        width: 100%;
        background: #545c64;
    }

    .wrap >>> li {
        width: 200px;
    }
</style>
