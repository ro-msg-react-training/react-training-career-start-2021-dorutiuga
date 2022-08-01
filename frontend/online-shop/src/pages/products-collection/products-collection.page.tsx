import { FC, useEffect, useState } from "react";
import "./products-collection.style.css";
import ProductPreview from "../../components/product-preview/product-preview.component";
import { Grid } from "@mui/material";
import { fetchProducts } from "../../services/products.service";
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
    fetchProducts({ setProduct });
    // eslint-disable-next-line
  }, []);

  return (
    <Grid container spacing={2}>
      {product.map((product) => (
        <Grid item xs={12} md={6} lg={4} xl={3} key={product.id}>
          <ProductPreview {...product} />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductsCollection;
