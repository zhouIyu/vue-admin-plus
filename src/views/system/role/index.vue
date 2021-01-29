<template>
    <div class="vap-container_main-operate">
        <vap-button type="success"
                    label="新增"
                    icon="el-icon-plus"
                    @click="addRole"/>
    </div>
    <vap-table ref="tableRef" :columns="columns" :get-list-fn="getRoleList">
        <el-table-column label="操作"
                         align="center">
            <template #default="scope">
                <vap-button type="danger"
                            label="删除"
                            :disabled="scope.row.valid === 0"
                            @click="removeRole(scope.row.id)"/>
                <vap-button type="warning"
                            label="编辑"
                            @click="editRole(scope.row)"/>
            </template>
        </el-table-column>
    </vap-table>
    <vap-dialog :visible="visible"
                width="400px"
                @close="closeDialog"
                @onOk="submitForm">
        <el-form ref="formRef"
                 :model="roleForm"
                 label-width="80px">
            <el-form-item label="角色名称" prop="name">
                <el-input v-model="roleForm.name"
                          :disabled="formItemConfig.name"
                          placeholder="请输入角色名称"/>
            </el-form-item>
            <el-form-item label="角色描述" prop="description">
                <el-input v-model="roleForm.description"
                          :disabled="formItemConfig.description"
                          placeholder="请输入角色描述"/>
            </el-form-item>
            <el-form-item label="是否正常" prop="valid">
                <el-switch v-model="roleForm.valid"
                           :disabled="formItemConfig.valid"
                           :active-value="1"
                           :inactive-value="0"/>
            </el-form-item>
        </el-form>
    </vap-dialog>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, unref, getCurrentInstance, toRaw } from 'vue';
import { createRole, getRoleList, removeRoleById, updateRoleById } from '@/api/role.ts';
import VapButton from '@/components/vap-button.vue';
import VapTable from '@/components/vap-table.vue';
import columns from '@/views/system/role/columns';
import VapDialog from '@/components/vap-dialog.vue';
import { Role } from '@/types/data';

export default defineComponent({
    name: 'SystemUser',
    components: { VapDialog, VapButton, VapTable },
    setup: function () {
        const formRef = ref(null);
        const roleForm = reactive<Role>({
            name: '',
            description: '',
            valid: 1,
            id: ''
        });

        const isEdit = ref(false);

        const formItemConfig = reactive({
            name: false,
            description: false,
            valid: false
        });

        const resetForm = () => {
            const form: any = unref(formRef);
            form.resetFields();
            formItemConfig.name = false;
            formItemConfig.description = false;
            formItemConfig.valid = false;
        };

        const visible = ref(false);
        const closeDialog = () => {
            visible.value = false;
            resetForm();
        };
        const openDialog = () => {
            visible.value = true;
        };

        const addRole = async () => {
            formItemConfig.valid = true;
            isEdit.value = false;
            openDialog();
        };
        const editRole = async (row: Role) => {
            formItemConfig.name = true;
            isEdit.value = true;
            roleForm.name = row.name;
            roleForm.description = row.description;
            roleForm.id = row.id;
            roleForm.valid = row.valid;
            openDialog();
        };
        const { ctx }: any = getCurrentInstance();
        const tableRef = ref(null);
        const removeRole = async (id: string) => {
            const result = await removeRoleById(id);
            if (result.code === 0) {
                const table: any = unref(tableRef);
                await table.fetchData();
                ctx.$message.success('删除成功');
            }
        };

        const submitForm = async () => {
            const body: Role = toRaw(roleForm);
            if (!isEdit.value) {
                delete body.id;
                delete body.valid;
                const result = await createRole(body);
                if (result.code === 0) {
                    const table: any = unref(tableRef);
                    await table.fetchData();
                    ctx.$message.success('新增成功');
                }
            } else {
                const { id } = body;
                delete body.id;
                const result = await updateRoleById(id as string, body);
                if (result.code === 0) {
                    const table: any = unref(tableRef);
                    await table.fetchData();
                    ctx.$message.success('编辑成功');
                }
            }
        };

        return {
            formRef,
            tableRef,
            roleForm,
            columns,
            visible,
            formItemConfig,
            getRoleList,
            resetForm,
            closeDialog,
            openDialog,
            addRole,
            editRole,
            removeRole,
            submitForm
        };
    }
});
</script>

<style lang="scss"
       scoped>
.vap-container_main-operate {
    margin-bottom: 10px;
}
</style>
