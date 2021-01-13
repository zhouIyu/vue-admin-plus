<template>
    <el-header height="60px"
               class="vap-container_header">
        <i :class="['icon', collapseIconClass]"
           @click="triggerCollapse"></i>
    </el-header>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, Ref } from 'vue';

export default defineComponent({
    name: 'VapHeader',
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
