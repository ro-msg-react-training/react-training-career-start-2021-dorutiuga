import { CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import OrderHistoryItem from "../../components/order-history-item/order-history.component";
import { OrderHistory } from "../../models/order-history.model";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchOrderHistoryStart } from "../../store/slices/order-history-slice";

const OrdersHistory = () => {
  const dispatch = useAppDispatch();
  const ordersHistory = useAppSelector((state) => state.orderHistory.orders);
  const isLoading = useAppSelector((state) => state.orderHistory.isLoading);

  useEffect(() => {
    dispatch(fetchOrderHistoryStart());
  }, [dispatch]);

  return (
    <>
      <Typography sx={{ m: 2 }}>Order history: </Typography>
      {!isLoading ? (
        ordersHistory.map((item: OrderHistory) => (
          <OrderHistoryItem {...item} key={item.id}></OrderHistoryItem>
        ))
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default OrdersHistory;
