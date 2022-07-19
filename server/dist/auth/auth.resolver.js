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
exports.AuthResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const enums_1 = require("../enums/enums");
const validation_pipe_1 = require("../pipes/validation.pipe");
const user_token_dto_1 = require("../token/dto/user-token.dto");
const user_schema_1 = require("../user/user.schema");
const auth_guard_1 = require("./auth.guard");
const auth_service_1 = require("./auth.service");
const login_user_dto_1 = require("./dto/login-user.dto");
const register_user_dto_1 = require("./dto/register-user.dto");
const user_auth_res_dto_1 = require("./res-dto/user-auth-res.dto");
const user_current_decorator_1 = require("./user-current.decorator");
const cookieOptions = {
    domain: 'localhost',
    secure: false,
    sameSite: 'strict',
    httpOnly: true,
    path: '/',
    maxAge: enums_1.CookieLife.Month,
};
let AuthResolver = class AuthResolver {
    constructor(authService) {
        this.authService = authService;
    }
    async registration(dto, ctx) {
        const { refreshToken, user } = await this.authService.registration(dto);
        ctx.res.cookie('refreshToken', refreshToken, cookieOptions);
        return user;
    }
    async login(input, ctx) {
        let { refreshToken, user } = await this.authService.login(input);
        ctx.res.cookie('refreshToken', refreshToken, cookieOptions);
        return user;
    }
    async refresh(ctx) {
        var _a;
        const token = (_a = ctx.req.cookies) === null || _a === void 0 ? void 0 : _a.refreshToken;
        const { refreshToken, user } = await this.authService.refresh(token);
        ctx.res.cookie('refreshToken', refreshToken, cookieOptions);
        return user;
    }
    async getAuthUser(userCurrent) {
        return await this.authService.getAuthUser(userCurrent);
    }
    async logout(userCurrent, ctx) {
        await this.authService.logout(userCurrent);
        ctx.res.clearCookie('refreshCookie');
        return null;
    }
};
__decorate([
    (0, graphql_1.Mutation)((returns) => user_auth_res_dto_1.UserAuthResDto),
    __param(0, (0, graphql_1.Args)('input', new validation_pipe_1.ValidationPipe())),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.RegisterUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "registration", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => user_auth_res_dto_1.UserAuthResDto),
    __param(0, (0, graphql_1.Args)('input', new validation_pipe_1.ValidationPipe())),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "login", null);
__decorate([
    (0, graphql_1.Query)((returns) => user_auth_res_dto_1.UserAuthResDto),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "refresh", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Query)((returns) => user_schema_1.User),
    __param(0, (0, user_current_decorator_1.UserCurrent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_token_dto_1.UserTokenDto]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "getAuthUser", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, graphql_1.Query)((returns) => user_auth_res_dto_1.UserAuthResDto, { nullable: true }),
    __param(0, (0, user_current_decorator_1.UserCurrent)()),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_token_dto_1.UserTokenDto, Object]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "logout", null);
AuthResolver = __decorate([
    (0, graphql_1.Resolver)((of) => user_schema_1.User),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthResolver);
exports.AuthResolver = AuthResolver;
//# sourceMappingURL=auth.resolver.js.map