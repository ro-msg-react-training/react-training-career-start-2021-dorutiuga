import { ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import ProductDetail from "./components/product-details/product-details.component";
import { myTheme } from "./helpers/custom-theme";
import { routes } from "./helpers/routes";
import AddProduct from "./pages/add-product/add-product.page";
import EditProduct from "./pages/edit-product/edit-product.page";
import HomePage from "./pages/home/home.page";
import Login from "./pages/login/login.page";
import OrdersHistory from "./pages/orders-history/orders-history.page";
import ProductsCollection from "./pages/products-collection/products-collection.page";
import ShoppingCart from "./pages/shoping-cart/shopping-cart.page";

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Header />
      <Container>
        <Routes>
          <Route
            path={routes.default}
            element={<Navigate to={routes.products} />}
          />
          <Route path={routes.homepage} element={<HomePage />} />
          <Route path={routes.products} element={<ProductsCollection />} />
          <Route path={routes.productId} element={<ProductDetail />} />
          <Route path={routes.cart} element={<ShoppingCart />} />
          <Route path={routes.login} element={<Login />} />
          <Route path={routes.ordersHistory} element={<OrdersHistory />} />
          <Route path={routes.editProduct} element={<EditProduct />} />
          <Route path={routes.addProduct} element={<AddProduct />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
