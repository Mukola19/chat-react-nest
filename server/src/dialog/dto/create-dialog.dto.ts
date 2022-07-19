import { IsEmail, IsString, Length } from 'class-validator'
import { Field, ArgsType, InputType } from '@nestjs/graphql'

@InputType()
export class CreateDialogDto {
  @Field()
  @IsString({ message: 'Має бути рядком' })
  readonly parnterId: string
}
