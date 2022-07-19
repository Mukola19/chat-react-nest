import { IsEmail, IsString, Length } from 'class-validator'
import { Field, ArgsType, InputType } from '@nestjs/graphql'

@InputType()
export class RegisterUserDto {
  @Field()
  @IsString({ message: 'Має бути рядком' })
  readonly firstName: string

  @Field()
  @IsString({ message: 'Має бути рядком' })
  readonly lastName: string

  @Field()
  @IsString({ message: 'Має бути рядком' })
  @IsEmail({}, { message: 'Не коректний email' })
  readonly email: string

  @IsString({ message: 'Має бути рядком' })
  @Field()
  @Length(4, 16, { message: 'Не менше 4 не більше 16' })
  readonly password: string

  @Field()
  readonly remember: boolean
}
