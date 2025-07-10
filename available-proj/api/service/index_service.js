const connectionManager = require(_base + '/api/common/db/connectionManager.js');
const CustomError = require(_base + '/api/common/error/custom_error');

const indexModule = require(_base + "/api/modules/index_module.js");

exports.getOrders = (req) => {
    return new Promise(async (resolve, reject) => {
        let result = {};
        let connection;
        try {
            let sortData = req.params.sortData;

            connection = await connectionManager.getConnection({ readOnly: true });
            let orders = await indexModule.selectOrderList(connection, { sortData: sortData });

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
            let outputs = await indexModule.selectOutput(connection, {});

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
            let sortData = req.body.sortData || "order"
            let title = req.body.title;
            let b_time = req.body.b_time;
            let e_time = req.body.e_time;
            let output = req.body.output;
            let price = req.body.price;
            let content = req.body.content;
            let note = req.body.note;
            let imp_yn = req.body.imp_yn;
            let order_price = req.body.order_price || 0;
            let work_price = req.body.show_price || 0;


            if (!title) {
                throw ({ code: "99", message: "title 없음" });
            }

            if (sortData != "broker") {
                order_price = price;
                work_price = price;
            }

            let params = {
                title: title,
                b_time: b_time,
                e_time: e_time,
                output: output,
                order_price: order_price,
                work_price: work_price,
                content: content,
                note: note,
                imp_yn: imp_yn,
                delete_yn: "N",
                show_yn: "Y",
                status: "01"
            }

            connection = await connectionManager.getConnection({ readOnly: false });

            const insertContent = await indexModule.insertContent(connection, params);
            params.content_idx = insertContent.insertId;

            const insertOrder = await indexModule.insertOrder(connection, params);
            params.order_idx = insertOrder.insertId;

            await indexModule.insertOrderHis(connection, params);
            await indexModule.insertPrice(connection, params);
            await indexModule.insertOrderStatus(connection, params);

            result.order_id = params.order_idx;

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

exports.changeStatus = (req) => {
    return new Promise(async (resolve, reject) => {
        let result = {};
        let connection;
        try {
            let status = req.body.status;
            let order_idx = req.body.order_idx;

            if (!status) {
                throw ({ code: "99", message: "status 없음" });
            } else if (!order_idx) {
                throw ({ code: "99", message: "order_idx 없음" });
            }

            connection = await connectionManager.getConnection({ readOnly: false });

            await indexModule.updateOrderStatus(connection, { order_idx: order_idx, status: status });

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

exports.getOrder = (req) => {
    return new Promise(async (resolve, reject) => {
        let result = {};
        let connection;
        try {
            let order_idx = req.query.order_idx;

            connection = await connectionManager.getConnection({ readOnly: true });

            let [order] = await indexModule.getOrderOne(connection, { order_idx: order_idx });
            let orderFixs = await indexModule.selectOrderFix(connection, { order_idx: order_idx });

            result = {
                order: order,
                orderFixs: orderFixs
            }

            resolve(result);
        } catch (error) {
            reject(error); // <- 여기 수정
        }
    });
};

exports.setOrderFix = (req) => {
    return new Promise(async (resolve, reject) => {
        let result = {};
        let connection;
        try {
            let order_idx = req.body.order_idx;
            let content = req.body.content
            connection = await connectionManager.getConnection({ readOnly: false });

            let params = {
                order_idx: order_idx,
                content: content,
            }

            let insertOrderFix = await indexModule.insertOrderFix(connection, params);

            result.order_fix_idx = insertOrderFix.insertId;

            connection.commit();
            resolve(result);
        } catch (error) {
            if (connection) {
                connection.rollback();
            }
            reject(error); // <- 여기 수정
        }
    });
};

exports.modifyOrder = (req) => {
    return new Promise(async (resolve, reject) => {
        let result = {};
        let connection;
        try {
            let sortData = req.body.sortData;
            let order_idx = req.body.order_idx;
            let title = req.body.title;
            let b_time = req.body.b_time || null;
            let e_time = req.body.e_time || null;
            let output = req.body.output;
            let price = req.body.price || 0;
            let content = req.body.content;
            let note = req.body.note;
            let importData = req.body.importData;

            let order_price = req.body.order_price || null;
            let show_price = req.body.show_price || null;

            if (!title) {
                throw ({ code: "99", message: "title 없음" });
            }

            if (sortData != "broker") {
                order_price = price;
            }

            let orderParams = {
                order_idx: order_idx,
                title: title,
                b_time: b_time,
                b_time_set: true,
                e_time: e_time,
                e_time_set: true,
                output: output,
                content: content,
                note: note,
                import: importData,
            }

            let pricePraams = {
                order_idx: order_idx
                , order_price: order_price
                , show_price: show_price
            }

            connection = await connectionManager.getConnection({ readOnly: false });
            await indexModule.updateOrder(connection, orderParams);
            await indexModule.updatePrice(connection, pricePraams);

            connection.commit();
            resolve(result);
        } catch (error) {
            if (connection) {
                connection.rollback();
            }
            reject(error); // <- 여기 수정
        }
    });
}