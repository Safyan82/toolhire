import { Arg, Mutation, Resolver } from "type-graphql";
import { CommentService } from "../../service/comment/comment.service";
import { CommentInput, CommentResponse } from "../../schema/comment/comment.schema";

@Resolver()
export class CommentResolver{
    constructor(private commentService: CommentService){
        this.commentService = new CommentService();
    }

    @Mutation(()=>CommentResponse)
    newComment(@Arg('input') input: CommentInput){
        return this.commentService.newComment(input);
    }

}