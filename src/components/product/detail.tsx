import { Product } from "../../graphql/products";

const ProductDetail = ({
  item: {
    description,
    title,
    imageUrl,
    price,
  },
}: {
  item: Product;
}) => (
  <div className="product-detail">
    <p className="product-detail__title">{title}</p>
    <img src={imageUrl} className="product-detail__image" />
    <p className="product-detail__description">{description}</p>
    <span className="product-detail__price">${price}</span>
  </div>
);

export default ProductDetail;
