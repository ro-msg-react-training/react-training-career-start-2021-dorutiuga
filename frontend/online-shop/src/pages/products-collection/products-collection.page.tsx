import { FC, useEffect, useState } from "react";
import "./products-collection.style.css";
import ProductPreview from "../../components/product-preview/product-preview.component";
import { CircularProgress, Grid } from "@mui/material";
import { fetchProducts } from "../../services/products.service";
import { Product } from "../../models/product.model";

const ProductsCollection: FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await fetchProducts();
      setProducts(result.data);
    };
    fetch();
  }, []);

  return (
    <>
      {products.length > 0 ? (
        <Grid container spacing={2}>
          {products.map((product: Product) => (
            <Grid item xs={12} md={6} lg={4} xl={3} key={product.id}>
              <ProductPreview {...product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};
export default ProductsCollection;
