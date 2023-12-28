import { gql } from "@apollo/client";

export const newReviewMutation = gql `
mutation($input: ReviewInput!){
    newReview(input: $input) {
      response
    }
}
`;

export const newCommentMutation = gql `
mutation($input: CommentInput!){
    newComment(input: $input) {
      response
    }
}
`;