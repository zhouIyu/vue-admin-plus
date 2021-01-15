<template>
    <el-header height="60px"
               class="vap-container_header">
        <el-row>
            <el-col :span="12"
                    class="vap-container_header-left">
                <i :class="['icon', collapseIconClass]"
                   @click="triggerCollapse"></i>
                <vap-breadcrumb/>
            </el-col>
            <el-col :span="12"
                    class="vap-container_header-right">
                <vap-user/>
            </el-col>
        </el-row>
    </el-header>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref, Ref } from 'vue';
import VapUser from '@/layout/vap-user/index.vue';
import VapBreadcrumb from '@/layout/vap-breadcrumb/index.vue';

export default defineComponent({
    name: 'VapHeader',
    components: { VapBreadcrumb, VapUser },
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
.vap-container_header {
    .el-row {
        height: 100%;

        .el-col {
            height: 100%;
        }
    }

    &-left {
        display: flex;
        align-items: center;
    }

    &-right {
        display: flex;;
        align-items: center;
        justify-content: flex-end;
    }
}

.icon {
    cursor: pointer;
    font-size: 18px;
    margin-right: 20px;
}
</style>
