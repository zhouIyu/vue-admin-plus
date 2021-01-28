import { App } from 'vue';
import {
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
    ElMessage,
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElFooter,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubmenu,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElAvatar,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElRow,
    ElCol,
    ElTable,
    ElTableColumn,
    ElPopover,
    ElPagination,
    ElDialog
} from 'element-plus';
import lang from 'element-plus/lib/locale/lang/zh-cn';
import locale from 'element-plus/lib/locale';

const components = [
    ElButton,
    ElForm,
    ElFormItem,
    ElInput,
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElFooter,
    ElMenu,
    ElMenuItem,
    ElSubmenu,
    ElMenuItemGroup,
    ElDropdown,
    ElDropdownItem,
    ElDropdownMenu,
    ElAvatar,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElRow,
    ElCol,
    ElTable,
    ElTableColumn,
    ElPopover,
    ElPagination,
    ElDialog
];

export default (app: App) => {
    locale.use(lang);
    app.config.globalProperties.$message = ElMessage;
    components.forEach((component: any) => {
        app.use(component);
    });
};
