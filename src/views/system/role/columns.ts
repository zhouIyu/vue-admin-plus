import { TableColumns } from '@/types/table';

const columns: TableColumns[] = [
    {
        type: 'index',
        label: '#',
        width: 50
    },
    {
        label: '角色名称',
        prop: 'role_name'
    },
    {
        label: '描述',
        prop: 'description'
    },
    {
        label: '创建时间',
        prop: 'create_time'
    },
    {
        label: '最后更新时间',
        prop: 'update_time'
    }
];

export default columns;
