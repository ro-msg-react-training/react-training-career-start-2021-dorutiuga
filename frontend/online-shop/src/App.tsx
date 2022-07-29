import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetail from "./components/product-details/products-details.component";
import HomePage from "./pages/home/home.page";
import ProductsCollection from "./pages/products-collection/products-collection.page";
export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#a01441",
    },
  },
  typography: {
    fontFamily: ["Chilanka", "cursive"].join(","),
  },
});
const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsCollection />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
