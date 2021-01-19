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
            :collapse-transition="false"
            :router="true">
            <vap-side-item v-for="item in menus"
                           :menu-item="item"
                           :key="item.name"/>
        </el-menu>
    </el-aside>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject, Ref } from 'vue';
import layoutStyle from '@/styles/layout.scss';
import VapLogo from '@/layout/vap-logo/index.vue';
import { useStore } from 'vuex';
import VapSideItem from '@/layout/vap-aside/side-item.vue';

export default defineComponent({
    name: 'VapAside',
    components: { VapSideItem, VapLogo },
    setup () {
        const store = useStore();
        const activeIndex = ref<string>('/dashboard');
        const useCollapse: Ref<boolean> = inject('collapse', ref(false));
        const collapseWidth = computed(() => {
            if (useCollapse.value) {
                return '65px';
            }
            return '200px';
        });

        const menus = store.getters['menus/menus'];

        return {
            activeIndex,
            collapseWidth,
            useCollapse,
            layoutStyle,
            menus
        };
    }
});
</script>

<style lang="scss"
       scoped>

</style>
