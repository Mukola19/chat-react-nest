import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { MongooseModule } from '@nestjs/mongoose'
import { Token, TokenSchema } from './token.schema'
import { TokenService } from './token.service'

@Module({
  providers: [TokenService],
  imports: [
    JwtModule.register({}),
    MongooseModule.forFeature([{ name: Token.name, schema: TokenSchema }]),
  ],
  exports: [TokenService],
})
export class TokenModule {}
