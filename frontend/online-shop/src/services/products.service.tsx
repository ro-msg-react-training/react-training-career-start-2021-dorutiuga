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
