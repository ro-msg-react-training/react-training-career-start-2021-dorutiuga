import { Button, CircularProgress, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CART_LOCAL_STORAGE_KEY } from "../../helpers/strings";
import { CartItems } from "../../models/cart-items.model";
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

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchProductById(params);
      setProduct(res.data);
    };
    fetch();
  }, [params]);

  const handleAddItemToCart = () => {
    let localCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    const cart: CartItems[] = [];
    if (localCart) {
      cart.push(...JSON.parse(localCart));
    }
    let existingProduct = cart.find(
      (cartItem) => cartItem.product.id === product?.id
    );
    console.log(existingProduct);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else if (product) {
      cart.push({ product: product, quantity: 1 });
    }
    localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
  };

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
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleAddItemToCart()}
          >
            Add To Cart
          </Button>
        </div>
      ) : (
        <CircularProgress></CircularProgress>
      )}
    </>
  );
};
export default ProductDetail;
