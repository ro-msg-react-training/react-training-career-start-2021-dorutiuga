import axios from "axios"
import { CREATE_ORDER_ENDPOINT } from "../helpers/strings"


export const createOrder =async ({customer, products}: any)=>{
const res = await axios.post(CREATE_ORDER_ENDPOINT, {customer: customer, products:products})
return res;
}