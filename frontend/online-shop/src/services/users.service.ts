import axios from "axios";

import { LOGIN_ENDPOIT } from "../helpers/strings";

export const fetchLoginCredentials = async ({email, password}: any) => {
    const res = await axios.post(LOGIN_ENDPOIT, {username: email, password:password});
    return res;
  };
  