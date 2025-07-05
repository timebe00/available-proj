exports.getOrders = (req) => {
    return new Promise(
        async (resolve, reject) => {
            let result = {};
            try {
                resolve(result);
            } catch (error) {
                console.log("getOrders : ", error);
                reject(errors)
            }
        }
    )
}