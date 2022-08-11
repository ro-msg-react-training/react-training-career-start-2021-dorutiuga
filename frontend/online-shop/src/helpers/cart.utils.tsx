import { CartItems } from "../models/cart-items.model";
import { Product } from "../models/product.model";

export const addItemsToCart = (
  cartItems: CartItems[],
  cartItemToAdd: Product
) => {
  const existingItemCart = cartItems.find(
    (item) => item.product.id === cartItemToAdd.id
  );

  if (existingItemCart) {
    existingItemCart.quantity += 1;
  } else {
    cartItems.push({ product: cartItemToAdd, quantity: 1 });
  }

  return cartItems;
};

export const removeItemFromCart = (
  cartItems: CartItems[],
  cartItemToRemove: Product
) => {
  const existingItemCart = cartItems.find(
    (item) => item.product.id === cartItemToRemove.id
  );
  if (existingItemCart?.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.product.id !== cartItemToRemove.id
    );
  }
  if (existingItemCart) {
    existingItemCart.quantity -= 1;
  }
  return cartItems;
};

export const removeProduct = (
  cartItems: CartItems[],
  productToRemove: Product
) => {
  return cartItems.filter((item) => item.product.id !== productToRemove.id);
};
