import { Button, Typography } from "@mui/material";

import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../../services/products.service";

const ProductDetail: FC = () => {
  let params = useParams();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });
  // eslint-disable-next-line
  const [shoppingCart, setShoppingCart] = useState([]);
  const handleAddItemToCart = () => {
    console.log("item added");
  };
  useEffect(() => {
    fetchProductById({ setProduct, params });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="product-detail-container">
      <div className="details-header">
        <h1>Product: {product.name} </h1>
        <Button variant="outlined" color="secondary" sx={{ m: 2 }}>
          Edit
        </Button>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </div>

      <div className="details-content">
        <Typography variant="h6">Name: {product.name}</Typography>
        <Typography variant="h6">Category:{product.category}</Typography>
        <Typography variant="h6">Price:{product.price}</Typography>
        <Typography variant="h6">Description:{product.description}</Typography>
        <img src={product.image} alt="" />
      </div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => handleAddItemToCart()}
      >
        Add To Cart
      </Button>
    </div>
  );
};
export default ProductDetail;
