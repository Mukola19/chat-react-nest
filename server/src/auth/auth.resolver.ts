import { UseGuards, UsePipes } from '@nestjs/common'
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CookieOptions } from 'express'
import { CookieLife } from 'src/enums/enums'
import { ValidationPipe } from 'src/pipes/validation.pipe'
import { UserTokenDto } from 'src/token/dto/user-token.dto'
import Ctx from 'src/types/context.type'
import { User } from 'src/user/user.schema'
import { AuthGuard } from './auth.guard'
import { AuthService } from './auth.service'
import { LoginUserDto } from './dto/login-user.dto'
import { RegisterUserDto } from './dto/register-user.dto'
import { UserAuthResDto } from './res-dto/user-auth-res.dto'
import { UserCurrent } from './user-current.decorator'

const cookieOptions: CookieOptions = {
  domain: 'localhost', // <- Change to your client domain
  secure: false, // <- Should be true if !development
  sameSite: 'strict',
  httpOnly: true,
  path: '/',
  maxAge: CookieLife.Month,
}

@Resolver((of) => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation((returns) => UserAuthResDto)
  async registration(
    @Args('input', new ValidationPipe()) dto: RegisterUserDto,
    @Context() ctx: Ctx
  ) {
    const { refreshToken, user } = await this.authService.registration(dto)
    ctx.res.cookie('refreshToken', refreshToken, cookieOptions)
    return user
  }

  @Mutation((returns) => UserAuthResDto)
  async login(
    @Args('input', new ValidationPipe()) input: LoginUserDto,
    @Context() ctx: Ctx
  ) {
    let { refreshToken, user } = await this.authService.login(input)
    ctx.res.cookie('refreshToken', refreshToken, cookieOptions)
    return user
  }

  @Query((returns) => UserAuthResDto)
  async refresh(@Context() ctx: Ctx) {
    const token = ctx.req.cookies?.refreshToken
    const { refreshToken, user } = await this.authService.refresh(token)
    ctx.res.cookie('refreshToken', refreshToken, cookieOptions)
    return user
  }

  @UseGuards(AuthGuard)
  @Query((returns) => User)
  async getAuthUser(@UserCurrent() userCurrent: UserTokenDto) {
    return await this.authService.getAuthUser(userCurrent)
  }

  @UseGuards(AuthGuard)
  @Query((returns) => UserAuthResDto, { nullable: true })
  async logout(@UserCurrent() userCurrent: UserTokenDto, @Context() ctx: Ctx) {
    await this.authService.logout(userCurrent)
    ctx.res.clearCookie('refreshCookie')
    return null
  }
}
