"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const typeorm_1 = require("typeorm");
const UserEntities_1 = require("./UserEntities");
let Roles = class Roles {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], Roles.prototype, "id_roles", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar' }),
    __metadata("design:type", String)
], Roles.prototype, "id_users", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], Roles.prototype, "roles", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 15 }),
    __metadata("design:type", String)
], Roles.prototype, "status", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], Roles.prototype, "create_roles", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" }),
    __metadata("design:type", Date)
], Roles.prototype, "update_roles", void 0);
__decorate([
    typeorm_1.OneToOne(() => UserEntities_1.Users, users => users.roles),
    typeorm_1.JoinColumn({ name: "id_users" }),
    __metadata("design:type", UserEntities_1.Users)
], Roles.prototype, "users", void 0);
Roles = __decorate([
    typeorm_1.Entity()
], Roles);
exports.Roles = Roles;
//# sourceMappingURL=RolesEntities.js.map