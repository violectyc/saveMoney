<template>
    <div class="wrap">
        <div class="avatar">
            <el-avatar
                    :size="50"
                    :src="user.Avatar"
            ></el-avatar>
            <el-dropdown trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        name: "NavHeader",
        computed: {
            ...mapState(['user'])
        },
        methods: {
            handleCommand(command) {
                if (command === 'logout') {
                    window.localStorage.removeItem('token');
                    window.localStorage.removeItem('user');
                    this.$store.commit('setUser', {});
                    this.$router.replace('/login');

                }
            }
        }
    };
</script>

<style scoped lang="less">
    .wrap /deep/ .el-dropdown:hover {
        cursor: pointer;
    }

    .wrap {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-top: 5px;


        .avatar {
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            .el-dropdown-link,
            .el-icon--right {
                color: #409eff;
            }
        }
    }
</style>
