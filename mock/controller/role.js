const { Random } = require('mockjs');

Random.extend({
    role: function () {
        const roleList = ['admin', 'editor', 'test'];
        return this.pick(roleList);
    }
});

function getRoleList () {
    const total = Math.random() * 20;
    let i = 0;
    const list = [];
    while (total > i) {
        i++;
        list.push({
            id: Random.integer(0, 100),
            role_name: Random.role(),
            description: Random.string(),
            create_time: Random.date(),
            update_time: Random.date()
        });
    }
    return {
        total,
        list
    };
}

module.exports = [
    {
        url: '/getRoleList',
        type: 'get',
        response () {
            return {
                code: 200,
                msg: 'success',
                data: getRoleList()
            };
        }
    }
];
