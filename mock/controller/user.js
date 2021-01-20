const accessTokens = {
    admin: 'admin-accessToken',
    editor: 'editor-accessToken',
    test: 'test-accessToken'
};

module.exports = [
    {
        url: '/login',
        type: 'post',
        response (config) {
            const { username } = config.body;
            const accessToken = accessTokens[username];
            if (!accessToken) {
                return {
                    code: 500,
                    msg: '用户名或密码不正确'
                };
            }
            return {
                code: 200,
                msg: 'success',
                data: {
                    accessToken
                }
            };
        }
    },
    {
        url: '/getUserList',
        type: 'get',
        response () {
            return {
                code: 200,
                msg: 'success',
                data: {
                    total: 0,
                    list: []
                }
            };
        }
    }
];
