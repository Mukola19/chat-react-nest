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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const user_service_1 = require("../user/user.service");
const token_service_1 = require("../token/token.service");
let AuthService = class AuthService {
    constructor(userService, tokenService) {
        this.userService = userService;
        this.tokenService = tokenService;
    }
    async registration(dto) {
        const candidate = await this.userService.getUserByEmail(dto.email);
        if (candidate) {
            throw new common_1.HttpException('Користувач з таким email вже існує', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(dto.password, 4);
        const user = await this.userService.createUser(Object.assign(Object.assign({}, dto), { password: hashPassword }));
        const { accessToken, refreshToken } = await this.tokenService.generateTokens(user);
        this.tokenService.saveRefreshToken(refreshToken, user._id);
        return { refreshToken, user: Object.assign({ accessToken }, user) };
    }
    async login(dto) {
        let user = await this.userService.getUserByEmail(dto.email);
        if (!user) {
            throw new common_1.HttpException('Користувачa з таким email не існує', common_1.HttpStatus.BAD_REQUEST);
        }
        user = user.toObject();
        const isPassword = await bcrypt.compare(dto.password, user.password);
        if (!isPassword) {
            throw new common_1.HttpException('Пароль не вірний', common_1.HttpStatus.BAD_REQUEST);
        }
        const { accessToken, refreshToken } = this.tokenService.generateTokens(user);
        await this.tokenService.saveRefreshToken(refreshToken, user._id);
        return { refreshToken, user: Object.assign({ accessToken }, user) };
    }
    async getAuthUser(userCurrent) {
        const user = await this.userService.getUserByEmail(userCurrent.email);
        return user;
    }
    async refresh(token) {
        const decoded = this.tokenService.refreshValidate(token);
        const isToken = await this.tokenService.findRefreshToken(token);
        if (!decoded || !isToken) {
            throw new common_1.HttpException('Токен доступа не дійсний', common_1.HttpStatus.UNAUTHORIZED);
        }
        let user = await this.userService.getUserByEmail(decoded === null || decoded === void 0 ? void 0 : decoded.email);
        const { accessToken, refreshToken } = this.tokenService.generateTokens(user);
        await this.tokenService.saveRefreshToken(refreshToken, user._id);
        user = user.toObject();
        return { refreshToken, user: Object.assign({ accessToken }, user) };
    }
    async logout(user) {
        await this.tokenService.removeRefreshToken(user._id);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        token_service_1.TokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map