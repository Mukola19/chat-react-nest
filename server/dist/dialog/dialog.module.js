"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const token_module_1 = require("../token/token.module");
const dialog_resolver_1 = require("./dialog.resolver");
const dialog_schema_1 = require("./dialog.schema");
const dialog_service_1 = require("./dialog.service");
let DialogModule = class DialogModule {
};
DialogModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: dialog_schema_1.Dialog.name, schema: dialog_schema_1.DialogSchema }]),
            token_module_1.TokenModule,
        ],
        providers: [dialog_resolver_1.DialogResolver, dialog_service_1.DialogService],
    })
], DialogModule);
exports.DialogModule = DialogModule;
//# sourceMappingURL=dialog.module.js.map