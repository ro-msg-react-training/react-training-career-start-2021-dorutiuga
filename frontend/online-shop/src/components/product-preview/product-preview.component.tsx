import { FC } from "react";
import "./product-preview.style.css";

interface ProductPreviewProps {
  name: string;
  price: number;
  image: string;
}

const ProductPreview: FC<ProductPreviewProps> = ({ name, price, image }) => {
  return (
    <div className="container">
      <div className="name">
        <strong>{name}</strong>
      </div>
      <div className="name">
        <img src={image} alt="" />
      </div>
      <div className="footer">
        <span> ${price}</span>
        <span>
          <button>See details</button>
        </span>
      </div>
    </div>
  );
};

export default ProductPreview;
