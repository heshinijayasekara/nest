import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { Category } from './enums';

export enum type{
    IMAGE='image',
    VIDEO='video',
    
}

export enum content {
    COLLECTABLE_MODE = 'collectable',
    TIME_MODE = 'time',
}

export enum status {
    ACTIVE = 'active',
    INACTIVE = 'removed',
}

@Schema({ collection: 'itemData' }) 
// @Schema({
//     timestamps: true
// })
export class Item{

    @Prop()
    _id:object;

    @Prop()
    itemId:string;

    @Prop()
    views:number;

    @Prop()
    comments:number;

    @Prop()
    likes:number;

    @Prop()
    dislikes:number;

    @Prop()
    thrown:number;

    @Prop()
    caught:number;

    @Prop()
    shares:number;

    @Prop()
    publisherId:string;

    @Prop()
    type:type;

    @Prop()
    itemCreatedAt:string;


    @Prop()
    totalDistance:number;

    @Prop()
    speedByDistance:number;

    @Prop()
    numberOfLocations:number;

    @Prop()
    speedByLocations:number;

    @Prop()
    activePeriod:number;

    @Prop()
    contentType:content;

    @Prop()
    airLevel:number;

    @Prop()
    status:status;

    @Prop()
    category:string;

    @Prop()
    description:string;

    
}

export const ItemSchema = SchemaFactory.createForClass(Item)