import axios from "axios";

import { productsEndpoint } from "../helpers/strings";

export const fetchProducts = ({ setProduct }: any) => {
  axios.get(productsEndpoint).then(
    (res) => {
      setProduct(res.data);
    },
    (error) => {
      console.log(error);
    }
  );
};

export const fetchProductById = ({ setProduct, params }: any) => {
  const api: string = `${productsEndpoint}/${params.id}`;
  axios.get(api).then(
    (res) => {
      setProduct(res.data);
    },
    (error) => {
      console.log(error);
    }
  );
};
