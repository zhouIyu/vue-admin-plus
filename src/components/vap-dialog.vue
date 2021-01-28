<template>
    <el-dialog
        :title="title"
        v-model:visible="dialogVisible"
        width="30%"
        :before-close="handleClose(done)">
        <slot/>
        <template v-slot:footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'VapDialog',
    props: {
        title: {
            type: String,
            default: '提示'
        }
    }
});
</script>

<style lang="scss" scoped>

</style>
