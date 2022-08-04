import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CART_LOCAL_STORAGE_KEY,
  USER_LOCAL_STORAGE_TOKEN,
} from "../../helpers/strings";
import { CartItems } from "../../models/cart-items.model";
import { User } from "../../models/user";
import { createOrder } from "../../services/orders.service";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
} from "./shopping-cart.style";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItems[]>([]);
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const localUser = localStorage.getItem(USER_LOCAL_STORAGE_TOKEN);
    const cartToRevrieve = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
    if (cartToRevrieve) setCart(JSON.parse(cartToRevrieve));
    if (localUser) setUser(JSON.parse(localUser));
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async () => {
    const params = {
      customer: user?.username,
      products: cart.map((cart) => ({
        productId: cart.product.id,
        quantity: cart.quantity,
      })),
    };
    const res = await createOrder(params);
    console.log(res.data);
    localStorage.removeItem(CART_LOCAL_STORAGE_KEY);
    setCart([]);
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
          <CheckoutItem {...cart} setCart={setCart} key={cart.product.id} />
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
