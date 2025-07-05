const connectionManager = require(_base + '/api/common/db/connectionManager.js');
const CustomError = require(_base + '/api/common/error/custom_error');

const indexModule = require(_base + "/api/modules/index_module.js");

exports.getOrders = (req) => {
    return new Promise(async (resolve, reject) => {
        let result = {};
        let connection;
        try {
            connection = await connectionManager.getConnection({ readOnly: true });
            let orders = await indexModule.getOrders(connection, {}); // await 추가 필요 가능성 있음
            console.log(orders);
            resolve(result);
        } catch (error) {
            console.log("getOrders : ", error);
            reject(error); // <- 여기 수정
        }
    });
};
