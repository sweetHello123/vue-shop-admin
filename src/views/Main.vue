<template>
    <div>
        <el-container>
            <el-aside>
                <el-menu :default-openeds="['1']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-user"></i>用户管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">
                                <router-link :to="{name:'UserProfile',params:{id:2}}">个人信息</router-link>
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <router-link to="/user/list">用户列表</router-link>
                            </el-menu-item>
                            <!--<el-menu-item index="1-3">-->
                            <!--<router-link to="/goMain/wuchao">回到首页</router-link>-->
                            <!--</el-menu-item>-->
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-message"></i>内容管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">类目列表</el-menu-item>
                            <el-menu-item index="2-2">内容列表</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人信息</el-dropdown-item>
                            <el-dropdown-item>注销</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>{{this.$store.getters.getUser.username}}</span>
                </el-header>

                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Main",
        mounted() {
            // 监听浏览器刷新
            window.addEventListener('unload', this.saveState());
        },
        methods: {
            saveState() {
                // 将vuex的state保存的数据放入sessionStorage中
                // 模块化后，调用state的代码修改为this.$store.state.user
                sessionStorage.setItem('state', JSON.stringify(this.$store.state.user));
            }
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>