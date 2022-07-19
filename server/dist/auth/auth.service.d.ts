import { User } from 'src/user/user.schema';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserService } from 'src/user/user.service';
import { TokenService } from 'src/token/token.service';
import { UserTokenDto } from 'src/token/dto/user-token.dto';
export declare class AuthService {
    private userService;
    private tokenService;
    constructor(userService: UserService, tokenService: TokenService);
    registration(dto: RegisterUserDto): Promise<{
        refreshToken: string;
        user: {
            _id: import("mongoose").Schema.Types.ObjectId;
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            photoName: string;
            isActiveted: boolean;
            linkActivate: string;
            isBlocked: boolean;
            accessToken: string;
        };
    }>;
    login(dto: LoginUserDto): Promise<{
        refreshToken: string;
        user: {
            _id: any;
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            photoName: string;
            isActiveted: boolean;
            linkActivate: string;
            isBlocked: boolean;
            __v?: any;
            $locals: Record<string, unknown>;
            $op: "remove" | "save" | "validate";
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection<import("bson").Document>;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            id?: any;
            isNew: boolean;
            modelName: string;
            schema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
                [x: string]: any;
            }>;
            accessToken: string;
        };
    }>;
    getAuthUser(userCurrent: UserTokenDto): Promise<User>;
    refresh(token: string): Promise<{
        refreshToken: string;
        user: {
            _id: any;
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            photoName: string;
            isActiveted: boolean;
            linkActivate: string;
            isBlocked: boolean;
            __v?: any;
            $locals: Record<string, unknown>;
            $op: "remove" | "save" | "validate";
            $where: Record<string, unknown>;
            baseModelName?: string;
            collection: import("mongoose").Collection<import("bson").Document>;
            db: import("mongoose").Connection;
            errors?: import("mongoose").Error.ValidationError;
            id?: any;
            isNew: boolean;
            modelName: string;
            schema: import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any>, {}, {}, any, {}, "type", {
                [x: string]: any;
            }>;
            accessToken: string;
        };
    }>;
    logout(user: UserTokenDto): Promise<void>;
}
