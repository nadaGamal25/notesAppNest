import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/core/schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    signup=async (user:any)=>{
        let isUser = await this.userModel.findOne({ email: user.email });
        if(isUser) throw new HttpException('email already exist',HttpStatus.CONFLICT)

        user.password =await bcrypt.hash(user.password,8)    
        await this.userModel.insertMany(user)
        return {message:"success",data:{"user":user}}
    }
}
