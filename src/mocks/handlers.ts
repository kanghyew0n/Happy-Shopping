import { graphql } from "msw";
import { v4 as uuidv4 } from 'uuid';
import GET_PRODUCTS from "../graphql/products";

const mock_products = Array.from({ length: 20 }).map((_, i) => ({
  id : uuidv4(),
  imageUrl : `https://placeimg.com/640/480/${i+1}`,
  price : 5000,
  title : `임시 상품 ${i+1}`,
  description : `임시 상세내용 ${i+1}`,
  createdAt : new Date(1661055501880+(i * 1000 * 60 * 60 * 10)).toString()

}));

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mock_products,
      })
    );
  }),
];
