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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const token_service_1 = require("../token/token.service");
let AuthGuard = class AuthGuard {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    canActivate(context) {
        const req = graphql_1.GqlExecutionContext.create(context).getContext().req;
        try {
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const accessToken = authHeader.split(' ')[1];
            if (bearer !== 'Bearer' || !accessToken) {
                throw new common_1.UnauthorizedException({
                    message: 'Користувач не авторизований',
                });
            }
            const user = this.tokenService.accessValidate(accessToken);
            if (!user) {
                throw new common_1.UnauthorizedException({
                    message: 'Користувач не авторизований',
                });
            }
            req.user = user;
            return true;
        }
        catch (e) {
            throw new common_1.UnauthorizedException({
                message: 'Користувач не авторизований',
            });
        }
    }
};
AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [token_service_1.TokenService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map