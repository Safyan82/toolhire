import { CommentModal } from "../../schema/comment/comment.schema";


export class CommentService{
    async newComment(input){
        try{
            await CommentModal.create(input);
            return{
                response: {message: "Comment added successfully"}
            }
        }catch(err){
            return {
                response: {error: err.message}
            }
        }
    }

    async getCommentByToolId(id){
        try{
            const Comment = await CommentModal.find({_id:id});
            return{
                response: Comment
            }
        }catch(err){
            return {
                response: {error: err.message}
            }
        }

    }
}