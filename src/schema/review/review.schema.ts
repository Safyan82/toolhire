import { Prop, getModelForClass } from "@typegoose/typegoose";
import GraphQLJSON from "graphql-type-json";
import { ObjectId } from "mongoose";
import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Review{
    @Field(()=>ID)
    _id: string

    @Field(()=>String)
    @Prop()
    toolId: ObjectId

    @Field(()=>String)
    @Prop()
    review: string

    @Field(()=>Number)
    @Prop()
    performanceRating: number

    @Field(()=>Number)
    @Prop()
    customerRating: number
    
    @Field(()=>Number)
    @Prop()
    supportRating: number

    @Field(()=>Boolean, {nullable: true})
    @Prop({default: true})
    status: boolean
}


@InputType()
export class ReviewInput{
    
    @Field(()=>String, {nullable: true})
    @Prop()
    toolId: ObjectId

    @Field(()=>String, {nullable: true})
    @Prop()
    review: string

    @Field(()=>Number)
    @Prop()
    performanceRating: number

    @Field(()=>Number)
    @Prop()
    customerRating: number
    
    @Field(()=>Number)
    @Prop()
    supportRating: number


}

@ObjectType()
export class ReviewResponse{
    @Field(()=>GraphQLJSON)
    response: any
}

export const ReviewModal = getModelForClass(Review);