import { AuthGuard } from 'src/core/guards/auth.guard';
import { AddNoteDto, paramIdDto, updateNoteDto } from './dto/notes.dto';
import { NotesService } from './notes.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';

@Controller('notes')
@UseGuards(AuthGuard)
export class NotesController {
    constructor(private _NotesService: NotesService) {}

    @Post()
    addNote(@Body() body:AddNoteDto ,@Req() req:any){
        body.user=req.user.userId
        return this._NotesService.addNote(body);
    }
    @Get()
    getAllNotes(){
        return this._NotesService.getAllNotes();
    }
    @Delete('/:id')
    deleteNote(@Param() param:paramIdDto){
        return this._NotesService.deleteNote(param.id);
    }
    @Put('/:id')
    updateNote(@Param() param:paramIdDto, @Body() body:updateNoteDto ){
        return this._NotesService.updateNote(body,param.id);
    }


}
