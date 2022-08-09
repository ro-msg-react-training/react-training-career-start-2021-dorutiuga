import {
  Alert,
  Button,
  CircularProgress,
  Snackbar,
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { handleAddItemToCart } from "../../helpers/cart.utils";
import { routes } from "../../helpers/routes";
import { Product } from "../../models/product.model";
import {
  deleteProductById,
  fetchProductById,
} from "../../services/products.service";
import ConfirmationDialog from "../dialog/confirmation-dialog.component";
import { Container, DetailsContainer, Image } from "./product-details.style";

const ProductDetail: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [product, setProduct] = useState<Product>();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        if (params) {
          const res = await fetchProductById(params.id || "");
          setProduct(res.data);
        }
      } catch (err) {
        setTimeout(() => {
          navigate(routes.navigate, { replace: true });
        }, 2000);
      }
    };
    fetch();
    // eslint-disable-next-line
  }, [params]);

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
                onClick={() => setConfirmOpen(true)}
              >
                Delete
              </Button>
              <ConfirmationDialog
                title="Are you sure you want to delete this product?"
                open={confirmOpen}
                setOpen={setConfirmOpen}
                onConfirm={() => {
                  console.log("Deleted");
                  deleteProductById(params);
                  navigate(routes.navigate, { replace: true });
                }}
              />
            </span>
            <Button
              variant="outlined"
              sx={{ m: 2 }}
              color="info"
              onClick={() => {
                handleAddItemToCart(product, () => {});
                setAlert(true);
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
            onClose={() => setAlert(false)}
          >
            <Alert
              onClose={() => setAlert(false)}
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
