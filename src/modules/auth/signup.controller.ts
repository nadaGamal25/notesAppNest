import { SignupService } from './signup.service';
import { Body, Controller, Post } from '@nestjs/common';
import { SignupDto } from './dto/auth.dto';

@Controller('signup')
export class SignupController {
    constructor(private _SignupService: SignupService){}

    @Post()
    signup(@Body() body:SignupDto){
        return this._SignupService.signup(body);
    }
}
