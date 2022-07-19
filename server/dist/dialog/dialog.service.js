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
exports.DialogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const dialog_schema_1 = require("./dialog.schema");
let DialogService = class DialogService {
    constructor(dialogModel) {
        this.dialogModel = dialogModel;
    }
    async requestDialogs(userId) {
        const objId = new mongoose_2.Types.ObjectId(userId);
        const dialogs = await this.dialogModel.find({
            $or: [{ author: objId }, { partner: objId }],
        });
        return dialogs;
    }
    async createDialog(authorId, partnerId) {
        const dialog = await this.dialogModel.findOne({ authorId, partnerId });
        if (dialog) {
            throw new common_1.HttpException('Діалог вже існує', common_1.HttpStatus.BAD_REQUEST);
        }
        const newDialog = await this.dialogModel.create({ authorId, partnerId });
        return newDialog;
    }
};
DialogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(dialog_schema_1.Dialog.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DialogService);
exports.DialogService = DialogService;
//# sourceMappingURL=dialog.service.js.map