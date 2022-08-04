import { CartItems } from "../models/cart-items.model";
import { Product } from "../models/product.model";
import { CART_LOCAL_STORAGE_KEY } from "./strings";

export const handleAddItemToCart = (product: Product, setCart: any) => {
  let localCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
  const cart: CartItems[] = [];
  if (localCart) {
    cart.push(...JSON.parse(localCart));
  }
  let existingProduct = cart.find(
    (cartItem) => cartItem.product.id === product?.id
  );
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else if (product) {
    cart.push({ product: product, quantity: 1 });
  }
  localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
  setCart(cart);
};

export const handleDecreaseQuantity = (product: Product, setCart: any) => {
  let localCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
  const cart: CartItems[] = [];
  if (localCart) {
    cart.push(...JSON.parse(localCart));
  }
  let existingProduct = cart.find(
    (cartItem) => cartItem.product.id === product?.id
  );
  if (existingProduct && existingProduct.quantity > 1)
    existingProduct.quantity -= 1;
  else removeProduct(product, () => setCart);

  localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart));
  setCart(cart);
};

export const removeProduct = (product: Product, setCart: any) => {
  let localCart = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
  const cart: CartItems[] = [];
  if (localCart) {
    cart.push(...JSON.parse(localCart));
  }
  const newCart = cart.filter((item) => item.product.id !== product.id);
  localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(newCart));
  setCart(newCart);
};
