"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AuthServices_1 = __importDefault(require("../service/AuthServices"));
const AuthMiddleware = require('../middleware/AuthMiddleware');
const router = require("express").Router();
router.post('/auth', AuthServices_1.default.loginUsers);
router.post('/checkusers', AuthMiddleware.verifyToken, AuthServices_1.default.CheckUserData);
router.post('/refresh_token', AuthServices_1.default.loginUsers);
exports.default = router;
//# sourceMappingURL=AuthRouter.js.map