<template>
    <div class="vap-container">
        <div class="vap-container_login">
            <el-form ref="formRef"
                     :rules="rules"
                     :model="userForm">
                <el-form-item prop="username">
                    <el-input v-model="userForm.username"
                              placeholder="请输入用户名"
                              prefix-icon="el-icon-user"/>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password"
                              v-model="userForm.password"
                              placeholder="请输入密码"
                              prefix-icon="el-icon-lock"/>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"
                               size="small"
                               class="vap-container_login-submit"
                               @click="submitForm">
                        登录
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, unref, toRaw, getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Login } from '@/api/user';

export default defineComponent({
    name: 'Login',
    setup () {
        const formRef = ref(null);
        const userForm: Login = reactive({
            username: '',
            password: ''
        });
        const rules = {
            username: [{
                required: true,
                message: '请输入用户名',
                trigger: 'blur'
            }],
            password: [{
                required: true,
                message: '请输入密码',
                trigger: 'blur'
            }]
        };
        const { ctx }: any = getCurrentInstance();
        const router = useRouter();
        const store = useStore();
        const submitForm = async () => {
            const form: any = unref(formRef);
            if (!form) return false;
            form.validate(async (valid: boolean) => {
                if (valid) {
                    const result = await store.dispatch('user/login', toRaw(userForm));
                    if (result) {
                        ctx.$message.success('登录成功');
                        await router.replace('/');
                    }
                } else {
                    ctx.$message.error('用户名或密码错误');
                }
            });
        };
        return {
            userForm,
            formRef,
            rules,
            submitForm
        };
    }
});
</script>

<style lang="scss"
       scoped>
.vap-container_login {
    width: 300px;
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);

    &-submit {
        width: 100%;
    }
}
</style>
