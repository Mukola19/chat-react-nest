import { Field, ObjectType } from '@nestjs/graphql'
import { User } from '../../user/user.schema'

@ObjectType()
export class UserAuthResDto extends User {
  @Field(() => String)
  accessToken: string
}
