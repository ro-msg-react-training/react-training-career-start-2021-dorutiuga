import { Button, Typography } from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Can I still use this interface but when calling ProductDetail component I dont have to pass all args coming from interface?
// interface Product {
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   image: string;
// }
const ProductDetail: FC = () => {
  let params = useParams();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const api: string = `http://localhost:4000/products/${params.id}`;
    axios.get(api).then(
      (res) => {
        setProduct(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
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
      <Button variant="outlined" color="secondary">
        Add To Cart
      </Button>
    </div>
  );
};
export default ProductDetail;
