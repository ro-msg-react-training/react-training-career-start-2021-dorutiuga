import axios from "axios";
import { BASE_ENDPOINT } from "../helpers/strings";

export const createOrder = async ({ customer, products }: any) => {
  const res = await axios.post(BASE_ENDPOINT.concat("orders"), {
    customer: customer,
    products: products,
  });
  return res;
};
