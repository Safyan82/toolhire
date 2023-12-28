import { ReviewModal } from "../../schema/review/review.schema"
import mongoose, { ObjectId } from "mongoose"
export class ReviewService{
    async newReview(input){
        try{
            await ReviewModal.create(input);
            return{
                response: {message: "Review added successfully"}
            }
        }catch(err){
            return {
                response: {error: err.message}
            }
        }
    }

    async getReview(){
        try{
            const review = await ReviewModal.aggregate([
                
                {
                    $lookup:{
                        from: 'comments',
                        localField: "_id",
                        foreignField: "reviewId",
                        as: "comments"

                    },

                    
                    
                },
                
            ]);
            return{
                response: review
            }
        }catch(err){
            return {
                response: {error: err.message}
            }
        }

    }
}