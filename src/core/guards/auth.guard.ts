import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _jwtService: JwtService) {}
 async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    let token = request.headers['authorization'] // Directly extract the token
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this._jwtService.verify(token,{secret:"ay7aga"});
      request.user = payload;
      return true;
    } catch {
      throw new UnauthorizedException();
    }
    
  }

}

// import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private _jwtService: JwtService) {}

//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     const request = context.switchToHttp().getRequest();
//     const token = request.headers['authorization']; // Directly extract the token

//     if (!token) {
//       throw new UnauthorizedException('Token not found');
//     }

//     try {
//       // Verify the token using the secret key
//       const payload = await this._jwtService.verifyAsync(token, { secret: "ay7aga" });
//       request.user = payload; // Attach the user info to the request object
//       return true;
//     } catch (err) {
//       throw new UnauthorizedException('Invalid or expired token');
//     }
//   }
// }
