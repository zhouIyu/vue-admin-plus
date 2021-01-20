<template>
    <el-table
        :data="[{ date: '2016-05-02', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' }, { date: '2016-05-04', name: '王小虎', address: '上海市普陀区金沙江路 1517 弄' }]"
        style="width: 100%">
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
    </el-table>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { getUserList } from '@/api/user.ts';

export default defineComponent({
    name: 'SystemUser',
    setup () {
        const userList = ref([]);
        const total = ref<number>(0);
        const fetchData = async () => {
            const result = await getUserList();
            if (result.code === 200) {
                const { data } = result;
                userList.value = data.list;
                total.value = data.total;
            }
        };
        onMounted(async () => {
            await fetchData();
        });

        return {
            userList,
            total
        };
    }
});
</script>

<style lang="scss"
       scoped>

</style>
