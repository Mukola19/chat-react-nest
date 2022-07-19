import { Module } from '@nestjs/common'
import { TokenModule } from 'src/token/token.module'
import { UserModule } from 'src/user/user.module'
import { AuthResolver } from './auth.resolver'
import { AuthService } from './auth.service'

@Module({
  providers: [AuthResolver, AuthService],
  imports: [UserModule, TokenModule],
})
export class AuthModule {}
