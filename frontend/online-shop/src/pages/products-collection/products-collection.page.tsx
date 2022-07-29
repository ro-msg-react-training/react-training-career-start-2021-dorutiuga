import React, { FC, useEffect, useState } from "react";
import "./products-collection.style.css";
import ProductPreview from "../../components/product-preview/product-preview.component";
import { Grid } from "@mui/material";
import axios from "axios";

const ProductsCollection: FC = () => {
  // eslint-disable-next-line
  const [product, setProduct] = useState([
    {
      id: 0,
      name: "",
      description: "",
      category: "",
      price: 0,
      image: "",
    },
  ]);

  useEffect(() => {
    const api: string = `http://localhost:4000/products`;
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
    <Grid container spacing={2}>
      {product.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductPreview {...product} />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductsCollection;
