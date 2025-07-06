_mybatisMapper.createMapper([_base + '/api/sqlmap/index_sqlmap.xml']);

exports.getOrders = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.getOrders', sqlParamObj);
                console.log(sql);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}

exports.getOutputs = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.getOutputs', sqlParamObj);
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
