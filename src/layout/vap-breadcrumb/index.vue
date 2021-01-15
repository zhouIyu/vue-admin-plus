<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in list"
                            :key="item.path">
            {{ item.meta.title }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'VapBreadcrumb',
    setup () {
        const route = useRoute();
        const list = computed(() => {
            return route.matched.filter(item => item.name && item.meta.title);
        });
        return {
            list
        };
    }
});
</script>
