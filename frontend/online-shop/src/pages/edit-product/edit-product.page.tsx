import { Button, TextField, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../models/product.model";
import {
  fetchProductById,
  updateProductById,
} from "../../services/products.service";

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchProductById(params);
      setProduct(res.data);
      console.log(res.data);
    };
    fetch();
  }, [params]);

  const handleSave = async (product: Product) => {
    const param = {
      id: product.id,
      products: {
        name: product.name,
        category: product.category,
        image: product.image,
        price: product.price,
        description: product.description,
      },
    };
    await updateProductById(param);
    navigate("../products", { replace: true });
  };

  return product ? (
    <>
      <Typography> Edit Product: {product.name}</Typography> <br />
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
        onClick={() => navigate(`../products/${params.id}`, { replace: true })}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => handleSave(product)}
      >
        Save
      </Button>
    </>
  ) : (
    <></>
  );
};

export default EditProduct;
