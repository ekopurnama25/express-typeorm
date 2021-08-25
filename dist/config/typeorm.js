"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserEntities_1 = require("../entities/UserEntities");
const RolesEntities_1 = require("../entities/RolesEntities");
const TokenEntities_1 = require("../entities/TokenEntities");
const typeorm_1 = require("typeorm");
const typeorm = () => __awaiter(void 0, void 0, void 0, function* () {
    const connections = yield typeorm_1.createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        password: "root",
        username: "postgres",
        database: "sosmed",
        entities: [UserEntities_1.Users, RolesEntities_1.Roles, TokenEntities_1.Token],
        synchronize: true
    });
    if (connections) {
        console.log("Database is Connections");
    }
    else {
        console.log("Database Not Connection");
    }
});
typeorm();
//# sourceMappingURL=typeorm.js.map