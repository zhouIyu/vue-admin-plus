import { App } from 'vue';
import { ElButton, ElForm, ElFormItem, ElInput, ElMessage } from 'element-plus';
import lang from 'element-plus/lib/locale/lang/zh-cn';
import locale from 'element-plus/lib/locale';

export default (app: App) => {
    locale.use(lang);
    app.use(ElButton);
    app.use(ElForm);
    app.use(ElFormItem);
    app.use(ElInput);
    app.config.globalProperties.$message = ElMessage;
};
