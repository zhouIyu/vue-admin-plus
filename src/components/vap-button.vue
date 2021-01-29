<template>
    <el-button class="vap-button"
               size="small"
               v-bind="$attrs">
        {{ label }}
    </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VapButton',
    props: {
        label: {
            type: String
        }
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
