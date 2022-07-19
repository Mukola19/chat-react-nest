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
exports.UserSchema = exports.User = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let User = class User {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], User.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ type: String, require: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], User.prototype, "photoName", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isActiveted", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], User.prototype, "linkActivate", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean),
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isBlocked", void 0);
User = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, mongoose_1.Schema)({ timestamps: true })
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
//# sourceMappingURL=user.schema.js.map