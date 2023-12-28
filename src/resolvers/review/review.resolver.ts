import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { ReviewService } from "../../service/review/review.service";
import { ReviewInput, ReviewResponse } from "../../schema/review/review.schema";

@Resolver()
export class ReviewResolver{
    constructor(private reviewService: ReviewService){
        this.reviewService = new ReviewService();
    }

    @Mutation(()=>ReviewResponse)
    newReview(@Arg('input') input: ReviewInput){
        return this.reviewService.newReview(input);
    }

    @Query(()=>ReviewResponse)
    getReview(){
        return this.reviewService.getReview()
    }
}