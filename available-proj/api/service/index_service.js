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

            result.orders = orders;

            resolve(result);
        } catch (error) {
            console.log("getOrders : ", error);
            reject(error); // <- 여기 수정
        }
    });
};

exports.getOutputs = (req) => {
    return new Promise(async (resolve, reject) => {
        let result = {};
        let connection;
        try {
            connection = await connectionManager.getConnection({ readOnly: true });
            let outputs = await indexModule.getOutputs(connection, {}); // await 추가 필요 가능성 있음

            result.outputs = outputs;

            resolve(result);
        } catch (error) {
            console.log("getOrders : ", error);
            reject(error); // <- 여기 수정
        }
    });
};


exports.setOrder = (req) => {
    return new Promise(async (resolve, reject) => {
        let result = {};
        let connection;
        try {
            let title = req.body.title;
            let b_time = req.body.b_time;
            let e_time = req.body.e_time;
            let output = req.body.output;
            let price = req.body.price;
            let content = req.body.content;
            let note = req.body.note;
            let importData = 0;

            if (!title) {
                throw ({ code: "99", message: "title 없음" });
            }
            console.log("content : ", content)

            let orderParams = {
                title: title,
                b_time: b_time,
                e_time: e_time,
                output: output,
                content: content,
                note: note,
                import: importData,
            }

            connection = await connectionManager.getConnection({ readOnly: false });
            let insertOrder = await indexModule.insertOrder(connection, orderParams); // await 추가 필요 가능성 있음
            let order_idx = insertOrder.insertId;

            await indexModule.insertPrice(connection, { order_idx: order_idx, price: price }); // await 추가 필요 가능성 있음

            result.order_id = order_idx;

            // connection.rollback();
            connection.commit();
            resolve(result);
        } catch (error) {
            if (connection) {
                connection.rollback();
            }
            console.log("setOrder : ", error);
            reject(error); // <- 여기 수정
        }
    });
};
