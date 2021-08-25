"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRefreshToken = exports.createAccessToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const createAccessToken = (user) => {
    return jsonwebtoken_1.sign({ userId: user.id_users }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "5m"
    });
};
exports.createAccessToken = createAccessToken;
const createRefreshToken = (user) => {
    return jsonwebtoken_1.sign({ userId: user.id_users }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "5m"
    });
};
exports.createRefreshToken = createRefreshToken;
//# sourceMappingURL=Auth.js.map