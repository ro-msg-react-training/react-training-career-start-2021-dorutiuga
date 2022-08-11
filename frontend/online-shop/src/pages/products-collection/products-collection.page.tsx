import { FC, useEffect } from "react";
import "./products-collection.style.css";
import ProductPreview from "../../components/product-preview/product-preview.component";
import { CircularProgress, Grid } from "@mui/material";
import { Product } from "../../models/product.model";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchProductsStart } from "../../store/slices/products-slice";

const ProductsCollection: FC = () => {
  const products = useAppSelector((state) => state.products.products);
  const isLoading = useAppSelector((state) => state.products.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  return (
    <>
      {!isLoading ? (
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
