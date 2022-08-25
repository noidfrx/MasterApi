"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openSealedBoxRequest = exports.createSealedBoxRequest = exports.openSealedBoxText = exports.createSealedBoxText = exports.isValidSignatureRequest = exports.signatureRequest = exports.isValidSignatureText = exports.signatureText = void 0;
const crypto_1 = __importDefault(require("crypto"));
const classes_1 = require("../classes");
const getSymmetricKey = (pass) => {
    const hash = crypto_1.default.createHash('sha256');
    const update = hash.update(pass, 'utf-8');
    return update.digest();
};
const signatureText = (text, pass) => {
    const key = getSymmetricKey(pass);
    const sign = crypto_1.default.createHmac('sha512', key);
    const encryptedData = sign.update(text, 'utf8').digest();
    const buffer = encryptedData.toString('base64');
    return encodeURIComponent(buffer);
};
exports.signatureText = signatureText;
const isValidSignatureText = (signature, text, pass) => {
    try {
        if (!signature)
            return false;
        const sign = decodeURIComponent((0, exports.signatureText)(text, pass));
        const singBuffer = Buffer.from(sign, 'base64');
        const decode = decodeURIComponent(signature);
        const checksum = Buffer.from(decode, 'base64');
        return crypto_1.default.timingSafeEqual(singBuffer, checksum);
    }
    catch (err) {
        if (err instanceof Error)
            return (0, classes_1.CryptoSignError)(err);
        else
            return (0, classes_1.CryptoSignError)();
    }
};
exports.isValidSignatureText = isValidSignatureText;
const signatureRequest = (request, pass) => {
    const data = JSON.stringify(request);
    return (0, exports.signatureText)(data, pass);
};
exports.signatureRequest = signatureRequest;
const isValidSignatureRequest = (signature, request, pass) => {
    const data = JSON.stringify(request);
    return (0, exports.isValidSignatureText)(signature, data, pass);
};
exports.isValidSignatureRequest = isValidSignatureRequest;
const createSealedBoxText = (text, pass) => {
    const key = getSymmetricKey(pass);
    const iv = Buffer.from('mBj0tzBUxDFmx1T', 'base64');
    const cipheriv = crypto_1.default.createCipheriv('aes-256-gcm', key, iv);
    const encryptedData = Buffer.concat([
        cipheriv.update(text, 'utf8'),
        cipheriv.final()
    ]);
    const buffer = Buffer.concat([
        iv,
        encryptedData,
        cipheriv.getAuthTag()
    ]).toString('base64');
    return encodeURIComponent(buffer);
};
exports.createSealedBoxText = createSealedBoxText;
const openSealedBoxText = (sealedBoxData, pass) => {
    try {
        const key = getSymmetricKey(pass);
        const decode = decodeURIComponent(sealedBoxData);
        const combinerBuffer = Buffer.from(decode, 'base64');
        const iv = combinerBuffer.subarray(0, 12);
        const decipher = crypto_1.default.createDecipheriv('aes-256-gcm', key, iv);
        const temp = combinerBuffer.length - 16;
        decipher.setAuthTag(combinerBuffer.subarray(temp));
        const update = decipher.update(combinerBuffer.subarray(12, temp), undefined, 'utf8');
        return update + decipher.final('utf8');
    }
    catch (err) {
        if (err instanceof Error)
            return (0, classes_1.CryptoSealedBoxError)(err);
        else
            return (0, classes_1.CryptoSealedBoxError)();
    }
};
exports.openSealedBoxText = openSealedBoxText;
const createSealedBoxRequest = (request, pass) => {
    const data = JSON.stringify(request);
    return (0, exports.createSealedBoxText)(data, pass);
};
exports.createSealedBoxRequest = createSealedBoxRequest;
const openSealedBoxRequest = (sealedBoxData, pass) => {
    const data = (0, exports.openSealedBoxText)(sealedBoxData, pass);
    if (data instanceof classes_1.Failed) {
        return data;
    }
    else {
        return JSON.parse(data);
    }
};
exports.openSealedBoxRequest = openSealedBoxRequest;
//# sourceMappingURL=crypto.js.map