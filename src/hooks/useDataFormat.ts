import { fn } from 'element-plus/es/el-table/src/table.type';
import dayjs from 'dayjs';

export default function useDataFormat () {
    const tableDateFormat: fn = function (row, column, cellValue) {
        const daterc = row[column.property];
        if (daterc !== null) {
            return dayjs(daterc).format('YYYY-MM-DD HH:mm');
        }
        return cellValue;
    };

    return {
        tableDateFormat
    };
}
