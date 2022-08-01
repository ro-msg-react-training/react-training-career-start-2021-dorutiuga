import { ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import ProductDetail from "./components/product-details/products-details.component";
import { myTheme } from "./helpers/custom-theme";

import HomePage from "./pages/home/home.page";
import ProductsCollection from "./pages/products-collection/products-collection.page";
import ShoppingCart from "./pages/shoping-cart/shopping-cart.page";

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsCollection />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
