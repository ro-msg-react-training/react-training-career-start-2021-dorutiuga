import axios from "axios";
import { BASE_ENDPOINT } from "../helpers/strings";
import { Product } from "../models/product.model";

export const fetchProducts = async () => {
  const res = await axios.get(BASE_ENDPOINT.concat("products"));
  return res;
};

export const fetchProductById = async (id: string) => {
  const res = await axios.get(BASE_ENDPOINT.concat(`products/${id}`));
  return res;
};

export const deleteProductById = async ({ id }: any) => {
  const res = await axios.delete(BASE_ENDPOINT.concat(`products/${id}`));
  return res;
};

export const updateProductById = async (id: number, product: Product) => {
  const res = await axios.put(BASE_ENDPOINT.concat(`products/${id}`), {
    name: product.name,
    category: product.category,
    image: product.image,
    price: product.price,
    description: product.description,
  });
  return res;
};

export const createProduct = async (product: Product) => {
  const res = await axios.post(BASE_ENDPOINT.concat("products"), {
    name: product.name,
    category: product.category,
    image: product.image,
    price: product.price,
    description: product.description,
  });
  return res;
};
