import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";

import React from "react";
import "./App.css";
import ProductsCollection from "./pages/products-collection/products-collection.page";
export const myTheme = createTheme({
  palette: {
    secondary: {
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
        <ProductsCollection />
      </Container>
    </ThemeProvider>
  );
};

export default App;
