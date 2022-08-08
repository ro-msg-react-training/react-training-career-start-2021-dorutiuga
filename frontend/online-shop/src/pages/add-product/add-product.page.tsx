import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../services/products.service";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSave = async () => {
    const params = {
      product: {
        name: name,
        category: category,
        image: image,
        price: price,
        description: description,
      },
    };
    await createProduct(params);
    navigate("../products", { replace: true });
  };
  return (
    <>
      <Typography> Create a new product</Typography> <br />
      <Typography>Name:</Typography>
      <TextField
        id="filled-basic"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></TextField>
      <Typography>Category:</Typography>
      <TextField
        id="filled-basic"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      ></TextField>
      <Typography>Image:</Typography>
      <TextField
        id="filled-basic"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></TextField>
      <Typography>Price:</Typography>
      <TextField
        type="number"
        id="filled-basic"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      ></TextField>
      <Typography>Description:</Typography>
      <TextField
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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
