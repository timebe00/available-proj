const knex = require('knex');

const dbConfing = {
    client: _props.DB.CLIENT,
    connection: {
        host: _props.DB.HOST,
        port: _props.DB.PORT,
        user: _props.DB.USER,
        password: _props.DB.PASSWORD,
        database: _props.DB.DATABASE,
        charset: 'utf8mb4',
        timezone: "Asia/Seoul"
    },
    pool: {
        min: _props.DB.POOL.MIN,
        max: _props.DB.POOL.MAX
    }
};

exports.dbConfing = knex(dbConfing);