<template>
    <el-header height="60px"
               class="vap-container_header">
        <i :class="['icon', collapseIconClass]"
           @click="triggerCollapse"></i>
    </el-header>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue';

export default defineComponent({
    name: 'VapHeader',
    props: {
        collapse: {
            type: Boolean,
            default: false
        },
        triggerCollapse: {
            type: Function
        }
    },
    setup (props, { emit }) {
        const { collapse } = toRefs(props);

        const collapseIconClass = computed(() => {
            return collapse.value ? 'el-icon-s-unfold' : 'el-icon-s-fold';
        });

        return {
            collapseIconClass
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
