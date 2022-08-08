import axios from "axios";
import { PRODUCTS_ENDPOINT } from "../helpers/strings";

export const fetchProducts = async () => {
  const res = await axios.get(PRODUCTS_ENDPOINT);
  return res;
};

export const fetchProductById = async ({ id }: any) => {
  const res = await axios.get(PRODUCTS_ENDPOINT.concat(`/${id}`));
  return res;
};

export const deleteProductById = async ({ id }: any) => {
  const res = await axios.delete(PRODUCTS_ENDPOINT.concat(`/${id}`));
  return res;
};

export const updateProductById = async ({ id, products }: any) => {
  const res = await axios.put(PRODUCTS_ENDPOINT.concat(`/${id}`), {
    name: products.name,
    category: products.category,
    image: products.image,
    price: products.price,
    description: products.description,
  });
  return res;
};

export const createProduct = async ({ product }: any) => {
  const res = await axios.post(PRODUCTS_ENDPOINT, {
    name: product.name,
    category: product.category,
    image: product.image,
    price: product.price,
    description: product.description,
  });
  return res;
};
