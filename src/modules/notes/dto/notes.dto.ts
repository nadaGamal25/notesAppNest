import { IsEmail, IsMongoId, isMongoId, IsOptional, IsStrongPassword, MaxLength, MinLength } from "class-validator";

export class AddNoteDto {
    @MaxLength(30)
    @MinLength(2)
    title: string;
    @MaxLength(300)
    @MinLength(2)    
    description: string;
    @IsMongoId()
    @IsOptional()
    user: string;
}

export class paramIdDto {
    @IsMongoId()
    id: string;
}

export class updateNoteDto {
    @MaxLength(30)
    @MinLength(2)
    @IsOptional()
    title: string;
    @MaxLength(300)
    @MinLength(2) 
    @IsOptional()   
    description: string;
    @IsMongoId()
    @IsOptional()
    user: string;
}

