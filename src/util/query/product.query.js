import { gql } from "@apollo/client";

export const productListQuery = gql `
query{
    productList {
      response
    }
}
`;

export const productListById = gql `
query($id: String!){
  getProductById(_id: $id) {
    response
  }
}
`;

export const reviewList = gql `
query{
  getReview {
    response
  }
}
`;