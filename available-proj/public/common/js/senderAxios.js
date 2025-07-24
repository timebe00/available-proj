var senderAxios
(function (senderAxios) {

    function callAxios(url, method, params, headers = {}, async) {
        let body = {};
        if (method && method.toLocaleUpperCase() != "GET") {
            body = Object.assign({}, params);
            params = {};
        }

        return axios({
            method: method,
            headers: headers,
            url: url,
            data: body,
            params: params,
        })
    }
    senderAxios.callAxios = callAxios
})(senderAxios || (senderAxios = {}));

var common
(function (common) {
    function enc(txt) {
        return btoa(txt);
    }
    common.enc = enc;

    function dec(txt) {
        return atob(txt);
    }
    common.dec = dec
})(common || (common = {}));