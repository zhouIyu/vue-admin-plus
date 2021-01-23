<template>
    <div class="vap-container_main-operate">
        <vap-button type="success"
                    label="新增"
                    icon="el-icon-plus"
                    @click="addRole"/>
    </div>
    <el-table
        border
        :data="roleList"
        style="width: 100%">
        <el-table-column v-for="column in columns"
                         :key="column.prop"
                         align="center"
                         v-bind="{...column}">
        </el-table-column>
        <el-table-column label="操作"
                         align="center">
            <template #default="scope">
                <vap-button type="danger"
                            label="删除"
                            @click="removeRole(scope.row.id)"/>
                <vap-button type="warning"
                            label="编辑"/>
            </template>

        </el-table-column>
    </el-table>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getRoleList } from '@/api/role.ts';
import VapButton from '@/components/vap-button.vue';
import columns from '@/views/system/role/columns';

export default defineComponent({
    name: 'SystemUser',
    components: { VapButton },
    setup () {
        const roleList = ref([]);
        const total = ref<number>(0);
        const fetchData = async () => {
            const result = await getRoleList();
            const { data } = result;
            roleList.value = data.list;
            total.value = data.total;
        };
        onMounted(async () => {
            await fetchData();
        });

        const addRole = async () => {
            console.log(1);
        };

        const removeRole = async (id: string) => {
            console.log(id);
        };

        return {
            roleList,
            total,
            columns,
            addRole,
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
