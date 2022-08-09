import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import OrderHistoryItem from "../../components/order-history-item/order-history.component";
import { OrderHistory } from "../../models/order-history.model";
import { fetchOrdersHistory } from "../../services/orders-history.service";

const OrdersHistory = () => {
  const [ordersHistory, setOrdersHistory] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchOrdersHistory();
      setOrdersHistory(res.data);
    };
    fetch();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Typography sx={{ m: 2 }}>Order history: </Typography>

      {ordersHistory.map((item: OrderHistory) => (
        <OrderHistoryItem {...item} key={item.id}></OrderHistoryItem>
      ))}
    </div>
  );
};

export default OrdersHistory;
