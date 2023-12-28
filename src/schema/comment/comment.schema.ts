import { Prop, getModelForClass } from "@typegoose/typegoose";
import GraphQLJSON from "graphql-type-json";
import { ObjectId } from "mongoose";
import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Comment{

    @Field(()=>ID)
    _id: string

    @Field(()=>String)
    @Prop()
    reviewId: ObjectId

    @Field(()=>String)
    @Prop()
    comment: string

}


@InputType()
export class CommentInput{


    @Field(()=>String, {nullable: true})
    @Prop()
    reviewId: ObjectId

    @Field(()=>String, {nullable: true})
    @Prop()
    comment: string

}



@ObjectType()
export class CommentResponse{
    @Field(()=>GraphQLJSON)
    response: any
}


export const CommentModal = getModelForClass(Comment);