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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const argon2_1 = __importDefault(require("argon2"));
const typeorm_1 = require("typeorm");
const UserEntities_1 = require("../entities/UserEntities");
const RolesEntities_1 = require("../entities/RolesEntities");
class UserServices {
}
UserServices.registrasiUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new UserEntities_1.Users();
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = yield argon2_1.default.hash(req.body.password);
    if (!user) {
        res.status(500).json({
            status: false,
            message: "The filling form must be filled out"
        });
    }
    else if (!user.username) {
        res.status(500).json({
            status: false,
            message: "Username cannot be empty"
        });
    }
    else if (!user.email) {
        res.status(500).json({
            status: false,
            message: "Email cannot be empty"
        });
    }
    else if (!user.password) {
        res.status(500).json({
            status: false,
            message: "Password cannot be empty"
        });
    }
    else {
        try {
            const ResultRegis = yield typeorm_1.getRepository(UserEntities_1.Users).save(user);
            if (ResultRegis) {
                const roles = new RolesEntities_1.Roles();
                roles.id_users = ResultRegis.id_users,
                    roles.roles = "Users",
                    roles.status = "Disable";
                yield typeorm_1.getRepository(RolesEntities_1.Roles).save(roles);
            }
            res.status(201).json(ResultRegis);
        }
        catch (err) {
            res.status(401).json({
                status: false,
                message: "Users Can't Be Found"
            });
        }
    }
});
exports.default = UserServices;
//# sourceMappingURL=UsersServices.js.map