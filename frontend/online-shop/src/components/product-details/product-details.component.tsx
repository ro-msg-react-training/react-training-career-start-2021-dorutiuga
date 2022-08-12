import {
  Alert,
  Button,
  CircularProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../helpers/routes";
import { deleteProductById } from "../../services/products.service";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { increaseQuantity } from "../../store/slices/cart-slice";
import {
  fetchProductDetailsStart,
  openAlert,
  openConfirmationDialog,
} from "../../store/slices/product-details-slice";
import ConfirmationDialog from "../dialog/confirmation-dialog.component";
import { Container, DetailsContainer, Image } from "./product-details.style";

const ProductDetail: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productDetails.product);
  const confirmOpen = useAppSelector(
    (state) => state.productDetails.confirmOpen
  );
  const alert = useAppSelector((state) => state.productDetails.alert);

  useEffect(() => {
    dispatch(fetchProductDetailsStart(params.id || ""));
  }, [params, dispatch]);

  return (
    <>
      {product ? (
        <div className="product-detail-container">
          <div className="details-header">
            <h1>Product: {product.name} </h1>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() =>
                navigate(`../products/edit/${product.id}`, {
                  replace: true,
                })
              }
              sx={{ m: 2 }}
            >
              Edit
            </Button>
            <span>
              <Button
                variant="outlined"
                color="error"
                onClick={() => dispatch(openConfirmationDialog(true))}
              >
                Delete
              </Button>
              <ConfirmationDialog
                title="Are you sure you want to delete this product?"
                open={confirmOpen}
                setOpen={() => dispatch(openConfirmationDialog(false))}
                onConfirm={() => {
                  deleteProductById(params.id || "");
                  navigate(routes.navigate, { replace: true });
                  dispatch(openConfirmationDialog(false));
                }}
              />
            </span>
            <Button
              variant="outlined"
              sx={{ m: 2 }}
              color="info"
              onClick={() => {
                dispatch(increaseQuantity(product));
                dispatch(openAlert(true));
              }}
            >
              Add To Cart
            </Button>
          </div>
          <Container>
            <DetailsContainer>
              <Typography variant="h6">Name: {product.name}</Typography>
              <Typography variant="h6">Category:{product.category}</Typography>
              <Typography variant="h6">Price:{product.price}</Typography>
              <Typography variant="h6">
                Description:{product.description}
              </Typography>
            </DetailsContainer>
            <Image>
              <img src={product.image} alt="undefined" />
            </Image>
          </Container>
          <Snackbar
            open={alert}
            autoHideDuration={6000}
            onClose={() => dispatch(openAlert(false))}
          >
            <Alert
              onClose={() => dispatch(openAlert(false))}
              severity="success"
              sx={{ width: "100%" }}
            >
              Product {product.name} added succesfully to cart
            </Alert>
          </Snackbar>
        </div>
      ) : (
        <CircularProgress
          style={{ display: "flex", justifyContent: "center" }}
        />
      )}
    </>
  );
};
export default ProductDetail;
