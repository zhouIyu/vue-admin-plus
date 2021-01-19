<template>
    <el-menu-item v-if="!hasChild"
                  :index="basePath +'/' + menuItem.path">
        <i :class="menuItem.meta.icon"></i>
        <template v-slot:title>
            <span>{{ menuItem.meta.title }}</span>
        </template>
    </el-menu-item>
    <el-submenu v-else
                :index="menuItem.path">
        <template v-slot:title>
            <i :class="menuItem.meta.icon"></i>
            <span>{{ menuItem.meta.title }}</span>
        </template>
        <vap-side-item v-for="item in menuItem.children"
                       :key="menuItem.path + '/' + item.path"
                       :menu-item="item"
                       :base-path="menuItem.path">
            <i :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
        </vap-side-item>
    </el-submenu>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs, PropType } from 'vue';
import { RouteRecordRaw } from 'vue-router';

export default defineComponent({
    name: 'VapSideItem',
    props: {
        menuItem: {
            type: Object as PropType<RouteRecordRaw>,
            required: true
        },
        basePath: {
            type: String,
            default: ''
        }
    },
    setup (props) {
        const { menuItem } = toRefs(props);
        const hasChild = computed(() => menuItem.value.children && menuItem.value.children.length);
        return {
            hasChild
        };
    }
});
</script>
