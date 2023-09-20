import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { Category } from './enums';



@Schema({ collection: 'clickData' }) 
export class Click{

    @Prop()
    _id:object;

    @Prop()
    userId:string;

    @Prop()
    itemId:string;

    @Prop()
    throw:number;

    @Prop()
    catch:number;

    @Prop()
    like:number;

    @Prop()
    dislike:number;

    @Prop()
    comment:number;

    @Prop()
    wordCountOfComment:number;

    @Prop()
    share:number;

    @Prop()
    notInterested:number;

    @Prop()
    report:number;

    @Prop()
    watchTime:number;


    @Prop()
    watchPercentage:string;

    @Prop()
    session_id:string;

    @Prop()
    score:number;
}

export const ClickSchema = SchemaFactory.createForClass(Click)