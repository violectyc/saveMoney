<template>
    <div>
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>个人信息</span>
            </div>
            <div class="user-info">
                <el-form ref="form" label-width="80px">
                    <el-row :gutter="10">
                        <el-col :span="8">
                            <el-form-item label="用户名:">
                                <span>{{user.UserName}}</span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10">
                        <el-col :span="8">
                            <el-form-item label="头像:">
                                <el-avatar size="large" :src="user.Avatar"></el-avatar>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">
                            <el-button type="primary">编辑头像</el-button>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10">
                        <el-col :span="8">
                            <el-form-item label="昵称:">
                                <span>{{user.NickName}}</span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row :gutter="10">
                        <el-col :span="8">
                            <el-form-item label="邮箱:">
                                <span>{{user.Email}}</span>
                            </el-form-item>
                        </el-col>
                        <el-col :span="4">

                            <el-button v-show="visibleEmailButton" type="primary">激活邮箱</el-button>

                        </el-col>
                    </el-row>
                    <el-row :gutter="10">
                        <el-col :span="8">
                            <el-form-item label="描述:">
                                <span>{{user.Description}}</span>
                            </el-form-item>
                        </el-col>
                    </el-row>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "index",
        computed: {
            ...mapState(['user']),
            visibleEmailButton() {
                return this.user.ActiveEmail === 1
            }
        }
    }
</script>

<style scoped>

</style>
