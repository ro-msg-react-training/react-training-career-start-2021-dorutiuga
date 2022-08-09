import axios from "axios";
import { BASE_ENDPOINT } from "../helpers/strings";

export const fetchOrdersHistory = async () => {
  const res = await axios.get(BASE_ENDPOINT.concat("orders"));
  return res;
};
