import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class CreateUser {
  @Field()
  email: string
}
