class CustomError extends Error {
    constructor(message, msg, code, status, ...params) {
        super(...params);

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }

        this.message = message || msg || '에러';
        this.custom_message = message || msg || '시스템 에러';
        this.code = code || '99';
        this.status = status || '500';
    }
}

module.exports = CustomError;