import useDataFormat from '@/hooks/useDataFormat';

const { tableDateFormat } = useDataFormat();
const columns = [
    {
        type: 'index',
        label: '#',
        width: 50
    },
    {
        label: '角色名称',
        prop: 'name',
        width: 100
    },
    {
        label: '描述',
        prop: 'description'
    },
    {
        label: '状态',
        prop: 'valid',
        width: 100,
        formatter: (row: any) => {
            return row.valid === 1 ? '正常' : '删除';
        }
    },
    {
        label: '创建时间',
        prop: 'create_time',
        formatter: tableDateFormat
    },
    {
        label: '最后更新时间',
        prop: 'update_time',
        formatter: tableDateFormat
    }
];

export default columns;
