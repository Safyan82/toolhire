import { Field, ID, InputType, ObjectType } from "type-graphql";
import {Prop, getModelForClass} from "@typegoose/typegoose";
import GraphQLJSON from "graphql-type-json";

@ObjectType()
export class Product{
    
    @Field(()=>ID)
    _id: string

    @Field(()=>String)
    @Prop()
    name: string

    @Field(()=>String)
    @Prop()
    img: string

    @Field(()=>String)
    @Prop()
    price: string

    @Field(()=>String)
    @Prop()
    code: string

}

@InputType()
export class ProductInput{

    @Field(()=>ID, {nullable: true})
    _id: string

    @Field(()=>String, {nullable: true})
    name: string

    @Field(()=>String, {nullable: true})
    img: string


    @Field(()=>String, {nullable: true})
    price: string

    @Field(()=>String, {nullable: true})
    code: string

}

@ObjectType()
export class ProductResponse{
    @Field(()=>GraphQLJSON, {nullable: true})
    response: any

    @Field(()=>String, {nullable: true})
    message: any
}

export const ProductModal = getModelForClass(Product)