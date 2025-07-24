var senderAxios
(function (senderAxios) {

    async function callAxios(url, method, params, headers = {}, async) {
        let body = {};
        if (method && method.toLocaleUpperCase() != "GET") {
            body = Object.assign({}, params);
            params = {};
        }

        return await axios({
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
    async function enc(txt) {
        return await btoa(unescape(encodeURIComponent(txt || "")));
    }
    common.enc = enc;

    async function dec(txt) {
        return await decodeURIComponent(escape(atob(txt || "")));
    }
    common.dec = dec
})(common || (common = {}));