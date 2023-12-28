import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { ProductService } from "../../service/product/product.service";
import { ProductInput, ProductResponse } from "../../schema/productSchema/product.schema";

@Resolver()
export class ProductResolver{
    constructor(private productService: ProductService){
        this.productService = new ProductService();
    }

    @Mutation(()=>ProductResponse)
    newProduct(@Arg('input', {validate: true}) input: ProductInput){
        return this.productService.newProduct(input)
    }

    @Mutation(()=>ProductResponse)
    updateProduct(@Arg('input', {validate: true}) input: ProductInput){
        return this.productService.updateProduct(input)
    }

    @Query(()=>ProductResponse)
    productList(){
        return this.productService.ProductList();
    }

    @Query(()=>ProductResponse)
    getProductById(@Arg('_id') _id:string){
        return this.productService.getProductById(_id);
    }

}