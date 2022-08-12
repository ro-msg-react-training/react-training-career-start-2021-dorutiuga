import axios from "axios";

import { BASE_ENDPOINT } from "../helpers/strings";

export const fetchLoginCredentials = async ({ email, password }: any) => {
  const res = await axios.post(BASE_ENDPOINT.concat("login"), {
    username: email,
    password: password,
  });
  return res.data;
};
