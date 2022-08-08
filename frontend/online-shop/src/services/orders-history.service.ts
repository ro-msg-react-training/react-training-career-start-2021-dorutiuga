import axios from "axios"
import { ORDERS_HISTORY_ENDPOINT } from "../helpers/strings"

export const fetchOrdersHistory = async()=>{
    const res = await axios.get(ORDERS_HISTORY_ENDPOINT)
    return res;
}

  