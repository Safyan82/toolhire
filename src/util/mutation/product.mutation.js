import { gql } from "@apollo/client";

export const newProductMutation = gql `
mutation($input: ProductInput!){
    newProduct(input: $input) {
      response
    }
}
`;


export const updateProductMutation = gql `
mutation($input: ProductInput!){
  updateProduct(input: $input) {
    response
  }
}
`;