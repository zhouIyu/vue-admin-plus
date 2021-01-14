<template>
    <el-dropdown>
        <span class="el-dropdown-link">
            <el-avatar> user </el-avatar><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="item in menuConfig"
                                  :command="item.command"
                                  :key="item.command">
                    <i :class="['icon',item.icon]"></i>
                    {{ item.label }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VapUser',
    setup () {
        const menuConfig = [
            {
                label: '个人信息',
                icon: 'el-icon-user',
                command: 'user'
            },
            {
                label: '修改密码',
                icon: 'el-icon-setting',
                command: 'password'
            },
            {
                label: '退出系统',
                icon: 'el-icon-turn-off',
                command: 'logout'
            }
        ];
        return {
            menuConfig
        };
    }
});
</script>

<style lang="scss"
       scoped>
.el-dropdown-link {
    display: flex;
    align-items: center;
}
</style>
