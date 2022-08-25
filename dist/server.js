"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const environment_1 = require("./environment");
const classes_1 = require("./classes");
const router_1 = __importDefault(require("./router"));
const database_1 = __importDefault(require("./router/database"));
const auth_1 = __importDefault(require("./router/auth"));
class Server {
    constructor(port) {
        this.start = () => {
            this.server.listen(this.port, () => {
                const address = this.server.address();
                console.log(this.logAddress(address));
            });
            this.server.on('error', (error) => {
                if (error.syscall !== 'listen')
                    throw error;
                const address = this.server.address();
                const bind = this.logAddress(address);
                switch (error.code) {
                    case 'EACCES':
                        console.error(bind + ' requires elevated privileges');
                        process.exit(1);
                        break;
                    case 'EADDRINUSE':
                        console.error(bind + ' is already in use');
                        process.exit(1);
                        break;
                    default:
                        throw error;
                }
            });
        };
        this.app = (0, express_1.default)();
        this.port = port;
        this.server = http_1.default.createServer(this.app);
        this.settingApp();
        this.settingRouter();
        this.settingErrorRouter();
    }
    settingApp() {
        this.app.set('views', path_1.default.join(__dirname, 'views'));
        this.app.set('view engine', 'pug');
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, cookie_parser_1.default)(environment_1.cookieSecret, {}));
    }
    settingRouter() {
        this.app.use('/', router_1.default);
        this.app.use('/auth', auth_1.default);
        this.app.use('/', database_1.default);
    }
    settingErrorRouter() {
        this.app.use((req, res, _) => {
            const fail = (0, classes_1.NotFoundError)(req.path);
            res.status(fail.message.code).json(fail);
        });
        this.app.use((err, req, res, _) => {
            const fail = (0, classes_1.CustomError)(err);
            res.status(fail.message.code).json(fail);
        });
    }
    logAddress(address) {
        let bind;
        if (address === null) {
            bind = 'Error: Address is null';
        }
        else if (typeof address === 'string') {
            bind = `Pipe: http://${address}`;
        }
        else {
            const addressHost = address.address === '::'
                ? 'localhost'
                : address.address;
            const addressPort = address.port || this.port;
            bind = `Port: http://${addressHost}:${addressPort}`;
        }
        return bind;
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map