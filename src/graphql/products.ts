import { gql } from "graphql-tag";

export type PRODUCTS = {
  id: string;
  imageUrl: string;
  price: number;
  description: string;
  createdAt: string;
};

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    id
    imageUrl
    price
    description
    createdAt
  }
`;

export default GET_PRODUCTS;
