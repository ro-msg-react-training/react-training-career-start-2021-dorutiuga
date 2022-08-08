import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import { OrderHistory } from "../../models/order-history.model";

import { OrderContainer } from "./order-history.style";

const OrderHistoryItem: FC<OrderHistory> = ({ customer, products }) => {
  return (
    <OrderContainer>
      <Paper>
        <Typography>Orderd made by : {customer}</Typography>
        <br />
        <Typography>
          Id's of the Products ordered:{" "}
          {products.map((item) => `${item.productId}, `)}
        </Typography>
        <br />
        <Typography>
          Quatities: {products.map((item) => `${item.quantity}, `)}
        </Typography>
      </Paper>
    </OrderContainer>
  );
};
export default OrderHistoryItem;
