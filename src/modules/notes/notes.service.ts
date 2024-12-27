import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notes } from 'src/core/schemas/notes.schema';

@Injectable()
export class NotesService {
    constructor(@InjectModel(Notes.name) private notesModel: Model<Notes>) {}

    addNote=async (note:any)=>{
        this.notesModel.insertMany(note)
        return {message:"success",note}
    }

    getAllNotes=async ()=>{
        let notes =await this.notesModel.find()
        return {message:"success",notes}
    }

    deleteNote=async (id:any)=>{
        let note =await this.notesModel.findByIdAndDelete(id)
        return {message:"success"}
    }

    updateNote=async (note:any,id:any)=>{
        let newNote =await this.notesModel.findByIdAndUpdate(id ,note,{new:true})
        return {message:"success",note:newNote}
    }
}
