import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum category{
    ADVENTURE='Adventure',
    CLASSICS='Classics',
    CRIME='Crime',
    FANTASY='Fantasy',
}


@Schema({
    timestamps: true
})
export class Item{

    @Prop()
    title:string;

    @Prop()
    description:string;

    @Prop()
    author:string;

    @Prop()
    price:number;

    @Prop()
    category:category;

    
}

export const ItemSchema = SchemaFactory.createForClass(Item)