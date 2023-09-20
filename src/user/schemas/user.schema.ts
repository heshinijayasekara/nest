import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";



@Schema({ collection: 'userData' }) 
export class User{

    @Prop()
    _id:object;

    @Prop()
    userId:string;

    @Prop()
    interest:string;

    @Prop()
    userCreatedAt:string;

    @Prop()
    birthday:string;

    @Prop()
    gender:string;

    @Prop()
    country:string;

    @Prop()
    hometown:string;

    @Prop()
    civilStatus:string;

    @Prop()
    noOfItemsPublished:number;

    @Prop()
    totalLikes:number;

    @Prop()
    totalComments:number;

    @Prop()
    totalfollowers:number;

    @Prop()
    following:number;    
}

export const UserSchema = SchemaFactory.createForClass(User)