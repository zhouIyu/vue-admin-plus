<template>
    <el-table :data="list"
              border
              ref="tableRef"
              style="margin-bottom: 10px;"
              stripe>
        <el-table-column v-for="column in columns"
                         :key="column.prop"
                         align="center"
                         v-bind="{...column}">
        </el-table-column>
        <slot/>
    </el-table>
    <el-pagination @current-change="currentChange"
                   style="text-align: right;"
                   :current-page="currentPage"
                   :page-sizes="[20, 40, 80, 100]"
                   :page-size="limit"
                   layout="total, prev, pager, next, jumper"
                   :total="total"
                   hide-on-single-page
                   background>
    </el-pagination>
</template>
<script lang="ts">
import { defineComponent, ref, toRaw, onMounted, watch, unref } from 'vue';

export default defineComponent({
    name: 'VapTable',
    props: {
        getListFn: {
            type: Function,
            required: true
        },
        columns: {
            type: Array,
            required: true
        }
    },
    setup (props) {
        const tableRef = ref(null);
        const currentPage = ref(1);
        const limit = 10;
        const list = ref([]);
        const total = ref<number>(0);

        const { getListFn } = toRaw(props);

        const fetchData = async () => {
            const offset = (currentPage.value - 1) * limit;
            const result = await getListFn({ limit, offset });
            const { data } = result;
            list.value = data.list;
            total.value = data.total;
        };

        onMounted(async () => {
            await fetchData();
        });

        watch(list, () => {
            const table: any = unref(tableRef);
            table.doLayout();
        });

        const currentChange = async (value: number) => {
            currentPage.value = value;
            await fetchData();
        };

        return {
            tableRef,
            currentPage,
            limit,
            list,
            total,
            currentChange,
            fetchData
        };
    }
});
</script>

<style lang="scss" scoped>
</style>
