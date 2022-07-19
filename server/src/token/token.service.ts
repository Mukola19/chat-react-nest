import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Schema } from 'mongoose'
import { User } from 'src/user/user.schema'
import { UserTokenDto } from './dto/user-token.dto'
import { Token, TokenDocument } from './token.schema'

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name) private tokenRepository: Model<TokenDocument>,
    private jwtService: JwtService
  ) {}

  generateTokens(user: User) {
    const { _id, email } = user
    const accessToken = this.jwtService.sign(
      { _id, email },
      {
        secret: process.env.TOKEN_ACCESS_SECRET,
        expiresIn: '30d',
      }
    )

    const refreshToken = this.jwtService.sign(
      { _id, email },
      {
        secret: process.env.TOKEN_REFRESH_SECRET,
        expiresIn: '30d',
      }
    )
    return { accessToken, refreshToken }
  }

  accessValidate(token: string): UserTokenDto {
    try {
      const decoded = this.jwtService.verify(token, {
        secret: process.env.TOKEN_ACCESS_SECRET,
      })

      return decoded
    } catch (e) {
      return null
    }
  }

  refreshValidate(token: string): UserTokenDto {
    try {
      const decoded = this.jwtService.verify(token, {
        secret: process.env.TOKEN_REFRESH_SECRET,
      })
      return decoded
    } catch (e) {
      return null
    }
  }

  async saveRefreshToken(
    refreshToken: string,
    userId: Schema.Types.ObjectId
  ): Promise<Token> {
    await this.tokenRepository.deleteMany({ userId })
    return await this.tokenRepository.create({ refreshToken, userId })
  }

  async findRefreshToken(refreshToken) {
    return await this.tokenRepository.findOne({ refreshToken })
  }

  async removeRefreshToken(userId: string) {
    await this.tokenRepository.deleteMany({ userId })
  }
}
