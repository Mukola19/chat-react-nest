import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { User } from 'src/user/user.schema'
import { LoginUserDto } from './dto/login-user.dto'
import { RegisterUserDto } from './dto/register-user.dto'
import * as bcrypt from 'bcrypt'
import { UserService } from 'src/user/user.service'
import { JwtService } from '@nestjs/jwt'
import { TokenService } from 'src/token/token.service'
import { UserTokenDto } from 'src/token/dto/user-token.dto'
import { CookieOptions } from 'express'

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  async registration(dto: RegisterUserDto) {
    const candidate = await this.userService.getUserByEmail(dto.email)
    if (candidate) {
      throw new HttpException(
        'Користувач з таким email вже існує',
        HttpStatus.BAD_REQUEST
      )
    }

    const hashPassword = await bcrypt.hash(dto.password, 4)

    const user = await this.userService.createUser({
      ...dto,
      password: hashPassword,
    })

    const { accessToken, refreshToken } =
      await this.tokenService.generateTokens(user)

    this.tokenService.saveRefreshToken(refreshToken, user._id)

    return { refreshToken, user: { accessToken, ...user } }
  }

  async login(dto: LoginUserDto) {
    let user = await this.userService.getUserByEmail(dto.email)
    if (!user) {
      throw new HttpException(
        'Користувачa з таким email не існує',
        HttpStatus.BAD_REQUEST
      )
    }
    user = user.toObject()
    const isPassword = await bcrypt.compare(dto.password, user.password)
    if (!isPassword) {
      throw new HttpException('Пароль не вірний', HttpStatus.BAD_REQUEST)
    }
    const { accessToken, refreshToken } = this.tokenService.generateTokens(user)
    await this.tokenService.saveRefreshToken(refreshToken, user._id)

    return { refreshToken, user: { accessToken, ...user } }
  }

  async getAuthUser(userCurrent: UserTokenDto): Promise<User> {
    const user = await this.userService.getUserByEmail(userCurrent.email)
    return user
  }

  async refresh(token: string) {
    const decoded = this.tokenService.refreshValidate(token)
    const isToken = await this.tokenService.findRefreshToken(token)

    if (!decoded || !isToken) {
      throw new HttpException(
        'Токен доступа не дійсний',
        HttpStatus.UNAUTHORIZED
      )
    }
    let user = await this.userService.getUserByEmail(decoded?.email)
    const { accessToken, refreshToken } = this.tokenService.generateTokens(user)
    await this.tokenService.saveRefreshToken(refreshToken, user._id)

    user = user.toObject()
    return { refreshToken, user: { accessToken, ...user } }
  }

  async logout(user: UserTokenDto) {
    await this.tokenService.removeRefreshToken(user._id)
    
  }
}
