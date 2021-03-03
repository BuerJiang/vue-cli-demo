export default {
    // 实时变化Signature
    makeSignature(params, reqTime) {
        let paramsKeys = Object.keys(params).sort();
        let paramsStr = '';
        for (let paramsKey of paramsKeys) {
            paramsStr += `${paramsKey}=${params[paramsKey]}&`;
        }
        return $.md5(paramsStr + reqTime);
    }
}