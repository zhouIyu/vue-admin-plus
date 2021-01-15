<template>
    <div class="vap-container_logo">
        <img class="vap-container_logo-img"
             src="../../assets/logo.png"/>
        <span v-if="!useCollapse"
              class="vap-container_logo-title">
            {{ title }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from 'vue';

export default defineComponent({
    name: 'VapLogo',
    setup () {
        const title = 'Vue Admin Plus';
        const useCollapse = inject('collapse', ref<boolean>(false));
        return {
            title,
            useCollapse
        };
    }
});
</script>

<style lang="scss"
       scoped>
@import "../../styles/layout";

.vap-container_logo {
    width: 100%;
    height: $--header-height;
    display: flex;
    align-items: center;
    justify-content: center;

    &-img {
        width: 20px;
        height: 20px;
    }

    &-title {
        color: #fff;
        font-size: 16px;
        margin-left: 15px;
    }
}
</style>
