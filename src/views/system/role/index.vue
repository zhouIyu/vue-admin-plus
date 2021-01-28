<template>
    <div class="vap-container_main-operate">
        <vap-button type="success"
                    label="新增"
                    icon="el-icon-plus"
                    @click="addRole"/>
    </div>
    <vap-table :columns="columns" :get-list-fn="getRoleList">
        <el-table-column label="操作"
                         align="center">
            <template #default="scope">
                <vap-button type="danger"
                            label="删除"
                            @click="removeRole(scope.row.id)"/>
                <vap-button type="warning"
                            label="编辑"
                            @click="editRole(scope.row.id)"/>
            </template>
        </el-table-column>
    </vap-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getRoleList } from '@/api/role.ts';
import VapButton from '@/components/vap-button.vue';
import VapTable from '@/components/vap-table.vue';
import columns from '@/views/system/role/columns';

export default defineComponent({
    name: 'SystemUser',
    components: { VapButton, VapTable },
    setup: function () {
        const addRole = async () => {
            console.log(1);
        };
        const editRole = async (id: string) => {
            console.log(id);
        };
        const removeRole = async (id: string) => {
            console.log(id);
        };
        return {
            getRoleList,
            columns,
            addRole,
            editRole,
            removeRole
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
