import { IsEmail, IsString, Length } from 'class-validator'
import { Field, ArgsType, InputType } from '@nestjs/graphql'

@InputType()
export class LoginUserDto {
  @Field()
  @IsString({ message: 'Має бути рядком' })
  @IsEmail({}, { message: 'Не коректний email' })
  readonly email: string

  @Field()
  @IsString({ message: 'Має бути рядком' })
  @Length(4, 16, { message: 'Не менше 4, не більше 16' })
  readonly password: string


  @Field()
 readonly remember: boolean
}
