import { CanActivate, ExecutionContext } from '@nestjs/common';
import { TokenService } from 'src/token/token.service';
export declare class AuthGuard implements CanActivate {
    private tokenService;
    constructor(tokenService: TokenService);
    canActivate(context: ExecutionContext): boolean;
}
