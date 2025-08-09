var common
(function (common) {
    async function enc(txt) {
        return await btoa(unescape(encodeURIComponent(txt || "")));
    }
    common.enc = enc;

    async function dec(txt) {
        return await decodeURIComponent(escape(atob(txt || "")));
    }
    common.dec = dec;

    function fullWord(str) {
        let result = String(str);
        
        return result.padStart(2, "0")
    }
    common.fullWord = fullWord;

    function scriptBtoA(str) {
        str = str.replace(/'/g, "&#39;");

        return str;
    }
    common.scriptBtoA = scriptBtoA;

    function scriptAtoB(str) {
        str = str.replace(/&amp;/g, "&");
        str = str.replace(/&#39;/g, "'");

        return str;
    }
    common.scriptAtoB = scriptAtoB;
})(common || (common = {}));
