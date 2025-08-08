_mybatisMapper.createMapper([_base + '/api/sqlmap/index_sqlmap.xml']);

exports.selectOutput = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.selectOutput', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.insertContent = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.insertContent', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.insertOrder = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.insertOrder', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.insertOrderHis = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.insertOrderHis', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}


exports.insertPrice = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.insertPrice', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.insertPriceHis = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.insertPriceHis', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.insertOrderStatus = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.insertOrderStatus', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.selectOrderList = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.selectOrderList', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.updateOrderStatus = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.updateOrderStatus', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.updatePrice = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.updatePrice', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.selectOrderView = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.selectOrderView', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.selectOrderFix = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.selectOrderFix', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.insertOrderFix = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.insertOrderFix', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.insertOrderFixHis = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.insertOrderFixHis', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.updateOrder = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.updateOrder', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.deletOrder = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.deletOrder', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.deleteOrderHis = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.deleteOrderHis', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.deleteOrderFix = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.deleteOrderFix', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.deleteOrderFixHis = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.deleteOrderFixHis', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.selectOrderContent = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.selectOrderContent', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.updaetSchedule = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.updaetSchedule', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.selectGetPrice = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.selectGetPrice', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.updatePricesShowYN = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.updatePricesShowYN', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.insertPricesShowYNHis = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.insertPricesShowYNHis', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.insertFile = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.insertFile', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

