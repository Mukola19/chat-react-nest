import { UserTokenDto } from 'src/token/dto/user-token.dto';
import Ctx from 'src/types/context.type';
import { User } from 'src/user/user.schema';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    registration(dto: RegisterUserDto, ctx: Ctx): Promise<{
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
    }>;
    login(input: LoginUserDto, ctx: Ctx): Promise<{
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
    }>;
    refresh(ctx: Ctx): Promise<{
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
    }>;
    getAuthUser(userCurrent: UserTokenDto): Promise<User>;
    logout(userCurrent: UserTokenDto, ctx: Ctx): Promise<any>;
}
