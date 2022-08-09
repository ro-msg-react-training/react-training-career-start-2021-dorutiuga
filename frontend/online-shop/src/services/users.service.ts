import axios from "axios";

import { BASE_ENDPOINT } from "../helpers/strings";

export const fetchLoginCredentials = async ({ email, password }: any) => {
  return await axios.post(BASE_ENDPOINT.concat("login"), {
    username: email,
    password: password,
  });
};
