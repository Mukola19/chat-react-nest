import { Document, Model, Types } from 'mongoose';
import { RegisterUserDto } from 'src/auth/dto/register-user.dto';
import { User, UserDocument } from './user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    getUserById(_id: string): Promise<User>;
    getUserByEmail(email: string): Promise<User & Document<any, any, any> & {
        _id: Types.ObjectId;
    }>;
    getAllUsers(): Promise<User[]>;
    createUser(user: RegisterUserDto): Promise<User>;
}
