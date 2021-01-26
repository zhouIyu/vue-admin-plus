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
        style="margin-bottom: 10px;">
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
    <el-pagination :total="total"
                   :page-size="limit"
                   small
                   hide-on-single-page
                   :current-page="currentPage"/>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, getCurrentInstance } from 'vue';
import { getRoleList, removeRoleById } from '@/api/role.ts';
import VapButton from '@/components/vap-button.vue';
import columns from '@/views/system/role/columns';
import useDataFormat from '@/hooks/useDataFormat';

export default defineComponent({
    name: 'SystemUser',
    components: { VapButton },
    setup () {
        const { ctx }: any = getCurrentInstance();
        const roleList = ref([]);
        const total = ref<number>(0);
        const currentPage = ref<number>(1);
        const limit = 10;
        const { tableDateFormat } = useDataFormat();
        const fetchData = async () => {
            const offset = (currentPage.value - 1) * limit;
            const result = await getRoleList({ limit, offset });
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
            await removeRoleById(id);
            await fetchData();
            ctx.$message.success('删除成功');
        };

        return {
            roleList,
            total,
            currentPage,
            limit,
            columns,
            tableDateFormat,
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
