import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateUser } from './dto/create-user.dto'
import { User } from './user.schema'
import { UserService } from './user.service'

@Resolver((of) => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async getUser(@Args('_id') _id: string) {
    return await this.userService.getUserById(_id)
  }

  @Query((returns) => User)
  async getAllUsers() {
    return await this.userService.getAllUsers
  }
}
