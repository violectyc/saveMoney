<template>
    <div class="wrap">
        <div class="form-wrap">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
                <el-form-item label="" prop="name">
                    <el-input prefix-icon="el-icon-user" v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="" prop="password">
                    <el-input prefix-icon="el-icon-lock" type="password" v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item class="btn-group">
                    <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                    <el-button @click="register">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {loginUser} from "../../service";
    import {mapMutations} from 'vuex';

    export default {
        name: "login",
        data() {
            return {
                ruleForm: {
                    name: '',
                    password: '',
                },
                rules: {
                    name: [
                        {required: true, message: '用户名不能为空', trigger: 'blur'},
                        {min: 3, max: 12, message: '长度在 3 到 12 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                        {
                            min: 6, max: 12, message: '长度到6到12个字符', trigger: 'blur'
                        }
                    ]

                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        loginUser(this.ruleForm).then(res => {
                            const {errCode, token, data, msg} = res.data;
                            if (errCode === 0) {
                                this.$store.commit('setUser', data);
                                localStorage.setItem('token', token);
                                localStorage.setItem('user',JSON.stringify(data));
                                this.$router.push('/');
                                this.$message({
                                    type: 'success',
                                    message: msg
                                })
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: msg
                                });
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            register() {
                this.$router.push('/register');
            }
        }
    }
</script>

<style scoped lang="less">
    .btn-group /deep/ .el-form-item__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        .form-wrap {
            width: 35%;
            max-width: 420px;

            .btn-group {
                & > div {
                    display: flex;

                    button {
                        width: 48%;
                    }
                }
            }
        }
    }
</style>
