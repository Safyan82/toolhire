import mongoose from "mongoose";
import { ProductModal } from "../../schema/productSchema/product.schema"

export class ProductService{

    async newProduct(input){
        try{
            const product = await ProductModal.create(input);
            return {
                message: "Product added successfully",
                product
            }
        }
        catch(err){
            return{
                response: null,
                message: err.message
            }
        }
    }

    async ProductList(){
        try{
            const products = await ProductModal.find();
            return{
                response: products,
                message: "All products list"
            }
        }
        catch(err){
            return{
                response: null,
                message: err.message
            }
        }
    }

    async updateProduct(input){
        try{
            const {_id, ...rest} = input;
            const products = await ProductModal.updateOne({_id},{...rest});
            return{
                response: products,
                message: "product updated"
            }
        }
        catch(err){
            return{
                response: null,
                message: err.message
            }
        }
    }

    async getProductById(_id){
        try{
            const products = await ProductModal.aggregate([
                {
                    $match : {_id: new mongoose.Types.ObjectId(_id)}
                },
                {
                    $lookup: {
                        from: 'reviews',
                        localField: '_id',
                        foreignField: 'toolId',
                        as: 'reviews',
                        pipeline: [
                          {
                            $match: {
                              status: true
                            }
                          }
                        ]
                    }
                },
                {
                    $lookup: {
                      from: 'comments',
                      localField: 'reviews._id',
                      foreignField: 'reviewId',
                      as: 'comments'
                    }
                },
            ]);
            return{
                response: products,
                message: "product"
            }
        }
        catch(err){
            return{
                response: null,
                message: err.message
            }
        }
    }
}