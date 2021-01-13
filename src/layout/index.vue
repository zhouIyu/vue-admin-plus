<template>
    <el-container class="vap-container">
        <vap-aside/>
        <el-container direction="vertical">
            <vap-header/>
            <el-main class="vap-container_main">
                主题内容
            </el-main>
            <vap-footer/>
        </el-container>
    </el-container>
</template>

<script lang="ts">
import VapAside from '@/layout/vap-aside/index.vue';
import VapHeader from '@/layout/vap-header/index.vue';
import VapFooter from '@/layout/vap-footer/index.vue';
import { defineComponent, ref, provide } from 'vue';

export default defineComponent({
    name: 'Layout',
    components: {
        VapFooter,
        VapHeader,
        VapAside
    },
    setup () {
        const collapse = ref<boolean>(false);
        const triggerCollapse = () => {
            collapse.value = !collapse.value;
        };
        provide('collapse', collapse);
        provide('triggerCollapse', triggerCollapse);
        return {
            collapse
        };
    }
});
</script>
