<template>
    <el-aside :width="collapseWidth"
              class="vap-container_aside">
        <el-menu
            :uniqueOpened="true"
            :default-active="activeIndex"
            :collapse="useCollapse"
            class="vap-container_aside-menu"
            :background-color="layoutStyle.menuBackground"
            :text-color="layoutStyle.menuText"
            :active-text-color="layoutStyle.menuActiveText"
            :collapse-transition="false">
            <el-submenu index="1">
                <template #title>
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template #title>分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template #title>选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <template #title>导航二</template>
            </el-menu-item>
            <el-menu-item index="3"
                          disabled>
                <i class="el-icon-document"></i>
                <template #title>导航三</template>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <template #title>导航四</template>
            </el-menu-item>
            <el-submenu index="5">
                <template #title>
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item-group>
                    <template #title>分组一</template>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="5-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject, Ref } from 'vue';
import layoutStyle from '@/styles/layout.scss';

export default defineComponent({
    name: 'VapAside',
    setup () {
        const activeIndex = ref<string>('1-1');
        const useCollapse: Ref<boolean> = inject('collapse', ref(false));
        const collapseWidth = computed(() => {
            if (useCollapse.value) {
                return '65px';
            }
            return '200px';
        });

        return {
            activeIndex,
            collapseWidth,
            useCollapse,
            layoutStyle
        };
    }
});
</script>

<style lang="scss"
       scoped>

</style>
