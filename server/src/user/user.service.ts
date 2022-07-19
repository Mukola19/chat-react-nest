import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Document, Model, Types } from 'mongoose'
import { RegisterUserDto } from 'src/auth/dto/register-user.dto'
import { User, UserDocument } from './user.schema'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUserById(_id: string): Promise<User> {
    const user = await this.userModel.findById(_id)
    if (!user) {
      throw new HttpException('blabla', HttpStatus.BAD_REQUEST)
    }
    return user
  }

  async getUserByEmail(email: string){
    const user = await this.userModel.findOne({ email })
    return user
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.userModel.find()
    return users
  }

  async createUser(user: RegisterUserDto): Promise<User> {
    const createUser = new this.userModel(user)
    await createUser.save()
    return createUser.toObject()
  }
}
