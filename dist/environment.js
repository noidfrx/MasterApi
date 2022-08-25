"use strict";
require("dotenv/config");
const process_1 = require("process");
const { PORT } = process_1.env;
const { COOKIE_SECRET } = process.env;
const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET, JWT_TIME } = process.env;
const { SIGN_SECRET, SEAL_SECRET } = process.env;
const config = {
    port: PORT !== null && PORT !== void 0 ? PORT : 3000,
    cookieSecret: COOKIE_SECRET !== null && COOKIE_SECRET !== void 0 ? COOKIE_SECRET : "1",
    jwtAccessSecret: JWT_ACCESS_SECRET !== null && JWT_ACCESS_SECRET !== void 0 ? JWT_ACCESS_SECRET : "2",
    jwtRefreshSecret: JWT_REFRESH_SECRET !== null && JWT_REFRESH_SECRET !== void 0 ? JWT_REFRESH_SECRET : "3",
    jwtTime: JWT_TIME !== null && JWT_TIME !== void 0 ? JWT_TIME : '1h',
    signSecret: SIGN_SECRET !== null && SIGN_SECRET !== void 0 ? SIGN_SECRET : "4",
    sealSecret: SEAL_SECRET !== null && SEAL_SECRET !== void 0 ? SEAL_SECRET : "5"
};
module.exports = config;
//# sourceMappingURL=environment.js.map