<template>
    <el-header height="60px"
               class="vap-container_header">
        <div class="vap-container_header-left">
            <i :class="['icon', collapseIconClass]"
               @click="triggerCollapse"></i>
        </div>
        <div class="vap-container_header-right">
            <vap-user/>
        </div>
    </el-header>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, Ref } from 'vue';
import VapUser from '@/layout/vap-user/index.vue';

export default defineComponent({
    name: 'VapHeader',
    components: { VapUser },
    setup () {
        const useCollapse: Ref<boolean> = inject('collapse', ref(false));
        const triggerCollapse = inject('triggerCollapse');
        const collapseIconClass = computed(() => {
            return useCollapse.value ? 'el-icon-s-unfold' : 'el-icon-s-fold';
        });

        return {
            collapseIconClass,
            triggerCollapse
        };
    }
});
</script>

<style lang="scss"
       scoped>
.icon {
    cursor: pointer;
    font-size: 18px;
}
</style>
