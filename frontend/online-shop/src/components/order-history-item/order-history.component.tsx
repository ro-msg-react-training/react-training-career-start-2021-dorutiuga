import { Paper, Typography } from "@mui/material";
import { FC } from "react";
import { OrderHistory } from "../../models/order-history.model";
import { OrderContainer } from "./order-history.style";

const OrderHistoryItem: FC<OrderHistory> = ({ customer, products }) => {
  return (
    <OrderContainer>
      <Paper>
        <Typography>Orderd made by : {customer}</Typography>

        <Typography>
          Id's of the Products ordered:
          {products
            .map((item) => `${item.productId}`)
            .join(",")
            .split("")}
        </Typography>

        <Typography>
          Quantities:
          {products
            .map((item) => `${item.quantity}`)
            .join(",")
            .split("")}
        </Typography>
      </Paper>
    </OrderContainer>
  );
};
export default OrderHistoryItem;
