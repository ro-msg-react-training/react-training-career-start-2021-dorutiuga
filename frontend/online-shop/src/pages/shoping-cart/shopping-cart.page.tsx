import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { createOrder } from "../../services/orders.service";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { emptyCart } from "../../store/slices/cart-slice";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
} from "./shopping-cart.style";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user.user);
  const cart = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();

  const handleSubmit = async () => {
    const params = {
      customer: user?.username,
      products: cart.map((cart) => ({
        productId: cart.product.id,
        quantity: cart.quantity,
      })),
    };
    await createOrder(params);
    dispatch(emptyCart());
  };

  return (
    <Box m={2} pt={3}>
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <Typography>Product</Typography>
          </HeaderBlock>
          <HeaderBlock>
            <Typography>Description</Typography>
          </HeaderBlock>
          <HeaderBlock>
            <Typography>Quantity</Typography>
          </HeaderBlock>
          <HeaderBlock>
            <Typography>Price</Typography>
          </HeaderBlock>
          <HeaderBlock>
            <Typography>Remove</Typography>
          </HeaderBlock>
        </CheckoutHeader>
        {cart.map((cart) => (
          <CheckoutItem {...cart} key={cart.product.id} />
        ))}
        Total $
        {cart.reduce(
          (total, items) => total + items.product.price * items.quantity,
          0
        )}
        <Button
          variant="contained"
          onClick={() =>
            user ? handleSubmit() : navigate("../login", { replace: true })
          }
          sx={{ m: 2 }}
        >
          Checkout
        </Button>
      </CheckoutContainer>
    </Box>
  );
};

export default ShoppingCart;
