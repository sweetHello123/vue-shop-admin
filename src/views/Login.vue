<template>
    <div>
        <el-form ref="form" :model="form" :rules="rules" label-width="50px" class="login-box">
            <h3>欢迎登录</h3>
            <el-form-item label="账号" prop="username">
                <el-input type="text" v-model="form.username" aria-placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password" aria-placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit('form')">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    username: "",
                    password: ""
                },
                rules: {
                    username: [
                        // blur:失去焦点时触发
                        {required: true, message: '账号不能为空', trigger: 'blur'},
                    ],
                    password: [
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                    ]
                }
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        sessionStorage.setItem("isLogin", "true");
                        this.$store.dispatch('asyncUpdateUser', {username: this.form.username});
                        // 编程式导航
                        this.$router.push({name: 'Main', params: {username: this.form.username}});
                    } else {
                        this.$message({
                            message: '请输入账号和密码',
                            type: 'warning'
                        });
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .login-box {
        width: 350px;
        margin: 150px auto;
        border: 1px solid #DCDFE6;
        border-radius: 5px;
        padding: 20px 20px 20px;
        box-shadow: 0 0 30px #DCDFE6;
    }
</style>