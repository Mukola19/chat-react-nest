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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const token_schema_1 = require("./token.schema");
let TokenService = class TokenService {
    constructor(tokenRepository, jwtService) {
        this.tokenRepository = tokenRepository;
        this.jwtService = jwtService;
    }
    generateTokens(user) {
        const { _id, email } = user;
        const accessToken = this.jwtService.sign({ _id, email }, {
            secret: process.env.TOKEN_ACCESS_SECRET,
            expiresIn: '30d',
        });
        const refreshToken = this.jwtService.sign({ _id, email }, {
            secret: process.env.TOKEN_REFRESH_SECRET,
            expiresIn: '30d',
        });
        return { accessToken, refreshToken };
    }
    accessValidate(token) {
        try {
            const decoded = this.jwtService.verify(token, {
                secret: process.env.TOKEN_ACCESS_SECRET,
            });
            return decoded;
        }
        catch (e) {
            return null;
        }
    }
    refreshValidate(token) {
        try {
            const decoded = this.jwtService.verify(token, {
                secret: process.env.TOKEN_REFRESH_SECRET,
            });
            return decoded;
        }
        catch (e) {
            return null;
        }
    }
    async saveRefreshToken(refreshToken, userId) {
        await this.tokenRepository.deleteMany({ userId });
        return await this.tokenRepository.create({ refreshToken, userId });
    }
    async findRefreshToken(refreshToken) {
        return await this.tokenRepository.findOne({ refreshToken });
    }
    async removeRefreshToken(userId) {
        await this.tokenRepository.deleteMany({ userId });
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(token_schema_1.Token.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map