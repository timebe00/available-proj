_mybatisMapper.createMapper([_base + '/api/sqlmap/index_sqlmap.xml']);

exports.getOrders = (connection, sqlParamObj) => {
    return new Promise(
        async (resolve, reject) => {
            try {
                var sql = _mybatisMapper.getStatement('available', 'available.getOrders', sqlParamObj);
                let [result] = await connection.raw(sql);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        }
    )
}