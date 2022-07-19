"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
let JwtAuthGuard = class JwtAuthGuard {
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        try {
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const accessToken = authHeader.split(' ')[1];
            if (bearer !== 'Bearer' || !accessToken) {
                throw new common_1.UnauthorizedException({
                    message: 'Користувач не авторизований',
                });
            }
            const user = undefined;
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
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-auth.guard.js.map