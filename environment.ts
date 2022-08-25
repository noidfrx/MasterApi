import 'dotenv/config';

import {env} from 'process';

const {PORT} = env;
const {COOKIE_SECRET} = process.env;
const {
    JWT_ACCESS_SECRET,
    JWT_REFRESH_SECRET,
    JWT_TIME
} = process.env;
const {
    SIGN_SECRET,
    SEAL_SECRET
} = process.env;

const config = {
    port: PORT ?? 3000,
    cookieSecret: COOKIE_SECRET ?? "1",
    jwtAccessSecret: JWT_ACCESS_SECRET ?? "2",
    jwtRefreshSecret: JWT_REFRESH_SECRET ?? "3",
    jwtTime: JWT_TIME ?? '1h',
    signSecret: SIGN_SECRET ?? "4",
    sealSecret: SEAL_SECRET ?? "5"
}

export = config