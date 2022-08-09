import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../models/product.model";
import { createProduct } from "../../services/products.service";

const AddProduct = () => {
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    category: "",
    price: 0,
    description: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleSave = async () => {
    const res = await createProduct(product);
    console.log(res);
    navigate("../products", { replace: true });
  };

  return (
    <>
      <Typography> Create a new product</Typography> <br />
      <Typography>Name:</Typography>
      <TextField
        id="filled-basic"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      ></TextField>
      <Typography>Category:</Typography>
      <TextField
        id="filled-basic"
        value={product.category}
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
      ></TextField>
      <Typography>Image:</Typography>
      <TextField
        id="filled-basic"
        value={product.image}
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
      ></TextField>
      <Typography>Price:</Typography>
      <TextField
        type="number"
        id="filled-basic"
        value={product.price}
        onChange={(e) =>
          setProduct({ ...product, price: Number(e.target.value) })
        }
      ></TextField>
      <Typography>Description:</Typography>
      <TextField
        fullWidth
        value={product.description}
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      ></TextField>
      <Button
        variant="outlined"
        sx={{ m: 2 }}
        onClick={() => navigate(`../products`, { replace: true })}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          handleSave();
        }}
      >
        Save
      </Button>
    </>
  );
};
export default AddProduct;
