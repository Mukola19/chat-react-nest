import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { TokenService } from 'src/token/token.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private tokenService: TokenService) {}
  canActivate(context: ExecutionContext): boolean {
    const req = GqlExecutionContext.create(context).getContext().req

    try {
      const authHeader = req.headers.authorization
      const bearer = authHeader.split(' ')[0]
      const accessToken = authHeader.split(' ')[1]

      if (bearer !== 'Bearer' || !accessToken) {
        throw new UnauthorizedException({
          message: 'Користувач не авторизований',
        })
      }

      const user = this.tokenService.accessValidate(accessToken)

      if (!user) {
        throw new UnauthorizedException({
          message: 'Користувач не авторизований',
        })
      }
      req.user = user
      return true
    } catch (e) {
      throw new UnauthorizedException({
        message: 'Користувач не авторизований',
      })
    }
  }
}
