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
exports.DialogSchema = exports.Dialog = void 0;
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const message_schema_1 = require("../message/message.schema");
const user_schema_1 = require("../user/user.schema");
let Dialog = class Dialog {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], Dialog.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_schema_1.User),
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, required: true, ref: 'User' }),
    __metadata("design:type", user_schema_1.User)
], Dialog.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_schema_1.User),
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, required: true, ref: 'User' }),
    __metadata("design:type", user_schema_1.User)
], Dialog.prototype, "partnerId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [message_schema_1.Message]),
    (0, mongoose_1.Prop)([{ type: mongoose_2.Schema.Types.ObjectId, ref: 'Message' }]),
    __metadata("design:type", Array)
], Dialog.prototype, "messagesId", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], Dialog.prototype, "lastMessage", void 0);
Dialog = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, mongoose_1.Schema)({ timestamps: true })
], Dialog);
exports.Dialog = Dialog;
exports.DialogSchema = mongoose_1.SchemaFactory.createForClass(Dialog);
//# sourceMappingURL=dialog.schema.js.map