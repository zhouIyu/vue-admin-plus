<template>
    <el-button class="vap-button"
               :size="size"
               v-bind="{...buttonProps}">
        {{ label }}
    </el-button>
</template>

<script lang="ts">
import { defineComponent, toRaw } from 'vue';

export default defineComponent({
    name: 'VapButton',
    props: {
        type: {
            type: String
        },
        label: {
            type: String
        },
        icon: {
            type: String
        }
    },
    setup (props) {
        const buttonProps = toRaw(props);
        return {
            buttonProps,
            size: 'small'
        };
    }
});
</script>
<style lang="scss"
       scoped>
.vap-button {
    padding: 8px 20px;
    margin-right: 10px;
}
</style>
