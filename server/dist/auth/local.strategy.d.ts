import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(dto: LoginUserDto): Promise<any>;
}
export {};
