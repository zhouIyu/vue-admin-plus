<template>
    <el-dialog
        v-bind="$attrs"
        append-to-body
        :model-value="visible">
        <slot/>
        <template v-slot:footer>
            <div class="dialog-footer">
                <vap-button label="取消" @click="onClose"/>
                <vap-button type="primary" label="确定" @click="onOk"/>
            </div>
        </template>
    </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VapButton from '@/components/vap-button.vue';

export default defineComponent({
    name: 'VapDialog',
    components: { VapButton },
    emits: ['onOk', 'close'],
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    setup (props, { emit }) {
        const onClose = () => {
            emit('close');
        };

        const onOk = () => {
            emit('onOk');
            onClose();
        };

        return {
            onOk,
            onClose
        };
    }
});
</script>

<style lang="scss">
.el-overlay {
    text-align: left !important;
}
</style>
