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
import { Product } from "../../models/product.model";
import {
  deleteProductById,
  fetchProductById,
} from "../../services/products.service";
import ConfirmationDialog from "../dialog/confirmation-dialog.component";

const ProductDetail: FC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [product, setProduct] = useState<Product>();
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await fetchProductById(params);
        setProduct(res.data);
      } catch (err) {
        setTimeout(() => {
          navigate("../products", { replace: true });
        }, 2000);
      }
    };
    fetch();
    // eslint-disable-next-line
  }, [params]);
  console.log(product);
  return (
    <>
      {product ? (
        <div className="product-detail-container">
          <div className="details-header">
            <h1>Product: {product.name} </h1>
            <Button variant="outlined" color="secondary" sx={{ m: 2 }}>
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
                  navigate("../products", { replace: true });
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

          <div className="details-content">
            <Typography variant="h6">Name: {product.name}</Typography>
            <Typography variant="h6">Category:{product.category}</Typography>
            <Typography variant="h6">Price:{product.price}</Typography>
            <Typography variant="h6">
              Description:{product.description}
            </Typography>
            <img src={product.image} alt="undefined" />
          </div>

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
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </div>
        </>
      )}
    </>
  );
};
export default ProductDetail;
