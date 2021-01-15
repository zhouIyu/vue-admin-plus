<template>
    <el-aside :width="collapseWidth"
              class="vap-container_aside">
        <vap-logo/>
        <el-menu
            :uniqueOpened="true"
            :default-active="activeIndex"
            :collapse="useCollapse"
            class="vap-container_aside-menu"
            :background-color="layoutStyle.menuBackground"
            :text-color="layoutStyle.menuText"
            :active-text-color="layoutStyle.menuActiveText"
            :collapse-transition="false">
            <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                <template #title>Dashboard</template>
            </el-menu-item>
            <el-submenu index="2">
                <template #title>
                    <i class="el-icon-menu"></i>
                    <span>组件</span>
                </template>
                <el-menu-item index="1-1">选项3</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject, Ref } from 'vue';
import layoutStyle from '@/styles/layout.scss';
import VapLogo from '@/layout/vap-logo/index.vue';

export default defineComponent({
    name: 'VapAside',
    components: { VapLogo },
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
