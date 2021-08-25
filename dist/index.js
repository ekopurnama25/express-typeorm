"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./config/typeorm");
const cors_1 = __importDefault(require("cors"));
const AuthRouter_1 = __importDefault(require("./router/AuthRouter"));
const UserRouter_1 = __importDefault(require("./router/UserRouter"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = express_1.default();
app.use(cors_1.default({
    origin: "http://localhost:4000",
    credentials: true
}));
app.use(cookie_parser_1.default());
app.use(express_1.default.json());
app.use('/api', UserRouter_1.default);
app.use('/api', AuthRouter_1.default);
app.listen(4000, () => {
    try {
        console.log("Server Is Connection");
    }
    catch (err) {
        console.log(err);
    }
});
//# sourceMappingURL=index.js.map