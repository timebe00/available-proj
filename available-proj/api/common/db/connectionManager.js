const CustomError = require('../error/custom_error.js');
const dbConnection = require(_base + '/api/common/db/dbConnection.js');
// const cacheUtil = require(_base + '/common/utils/cache_util');

let exportObj = {};

/**
 * readOnly : false - transation
 */
exportObj.getConnection = function (dataObj) {
    return new Promise(
        async (resolve, reject) => {
            try {
                let readOnly = dataObj.readOnly || false;
                // let dbName = dataObj.dbName; //  comAndPlay
                let conn;
                conn = await dbConnection.dbConfing;
                if (!readOnly) {
                    conn = await conn.transaction();
                }
                if (!conn) {
                    throw new CustomError('DB 연결 오류');
                }
                resolve(conn);

            } catch (error) {
                reject(error);
            }
        }
    )
}

module.exports = exportObj;