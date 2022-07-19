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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_guard_1 = require("../auth/auth.guard");
const user_current_decorator_1 = require("../auth/user-current.decorator");
const user_token_dto_1 = require("../token/dto/user-token.dto");
const dialog_schema_1 = require("./dialog.schema");
const dialog_service_1 = require("./dialog.service");
const create_dialog_dto_1 = require("./dto/create-dialog.dto");
let DialogResolver = class DialogResolver {
    constructor(dialogService) {
        this.dialogService = dialogService;
    }
    async requestDialogs(user) {
        const dialogs = await this.dialogService.requestDialogs(user._id);
        console.log(dialogs);
        return dialogs;
    }
    async createDialog(input, user) {
        const dialog = await this.dialogService.createDialog(user._id, input.parnterId);
        return dialog;
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Query)((returns) => [dialog_schema_1.Dialog]),
    __param(0, (0, user_current_decorator_1.UserCurrent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_token_dto_1.UserTokenDto]),
    __metadata("design:returntype", Promise)
], DialogResolver.prototype, "requestDialogs", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Mutation)((returns) => dialog_schema_1.Dialog),
    __param(0, (0, graphql_1.Args)('input', new common_1.ValidationPipe())),
    __param(1, (0, user_current_decorator_1.UserCurrent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dialog_dto_1.CreateDialogDto,
        user_token_dto_1.UserTokenDto]),
    __metadata("design:returntype", Promise)
], DialogResolver.prototype, "createDialog", null);
DialogResolver = __decorate([
    (0, graphql_1.Resolver)((of) => dialog_schema_1.Dialog),
    __metadata("design:paramtypes", [dialog_service_1.DialogService])
], DialogResolver);
exports.DialogResolver = DialogResolver;
//# sourceMappingURL=dialog.resolver.js.map