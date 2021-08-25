"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersServices_1 = __importDefault(require("../service/UsersServices"));
const router = require("express").Router();
router.post('/regis', UsersServices_1.default.registrasiUsers);
exports.default = router;
//# sourceMappingURL=UserRouter.js.map