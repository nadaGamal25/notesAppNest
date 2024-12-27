import { Body, Controller, Post } from '@nestjs/common';
import { SigninService } from './signin.service';
import { SigninDto } from './dto/auth.dto';

@Controller('signin')
export class SigninController {
    constructor(private _SigninService: SigninService){}

    @Post()
    signin(@Body() body:SigninDto){
        return this._SigninService.signin(body);
    }
}
