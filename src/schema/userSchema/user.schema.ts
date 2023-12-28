import { Prop, getModelForClass } from "@typegoose/typegoose";
import GraphQLJSON from "graphql-type-json";
import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class User{
    @Field(()=>ID)
    _id: string

    @Field(()=>String)
    @Prop()
    email: string

    @Field(()=>String)
    @Prop()
    name: string

    @Field(()=>String)
    @Prop()
    role: string

    @Field(()=>String)
    createdAt: string
}


@InputType()
export class UserInput{
    @Field(()=>String)
    email: string
    
    @Field(()=>String)
    name: string
}

@ObjectType()
export class UserResponse{
    @Field(()=>GraphQLJSON)
    response: any

    @Field(()=>String)
    message: string
}

export const UserModal = getModelForClass(User);