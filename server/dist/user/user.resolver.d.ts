import { User } from './user.schema';
import { UserService } from './user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    getUser(_id: string): Promise<User>;
    getAllUsers(): Promise<() => Promise<User[]>>;
}
