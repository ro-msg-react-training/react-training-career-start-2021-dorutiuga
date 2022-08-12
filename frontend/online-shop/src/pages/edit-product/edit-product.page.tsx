import { Button, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../../helpers/routes";
import { Product } from "../../models/product.model";
import { updateProductById } from "../../services/products.service";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  fetchEditProductStart,
  updateProduct,
} from "../../store/slices/edit-product-slice";

const EditProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.editProduct.product);
  useEffect(() => {
    dispatch(fetchEditProductStart(params.id || ""));
  }, [params, dispatch]);

  const handleSave = async (product: Product) => {
    await updateProductById(product.id, product);
    navigate(`${routes.navigate}/${product.id}`, { replace: true });
  };

  return product ? (
    <>
      <Typography> Edit Product: {product.name}</Typography> <br />
      <Typography>Name:</Typography>
      <TextField
        id="filled-basic"
        value={product.name}
        onChange={(e) =>
          dispatch(updateProduct({ ...product, name: e.target.value }))
        }
      ></TextField>
      <Typography>Category:</Typography>
      <TextField
        id="filled-basic"
        value={product.category}
        onChange={(e) =>
          dispatch(updateProduct({ ...product, category: e.target.value }))
        }
      ></TextField>
      <Typography>Image:</Typography>
      <TextField
        id="filled-basic"
        value={product.image}
        onChange={(e) =>
          dispatch(updateProduct({ ...product, image: e.target.value }))
        }
      ></TextField>
      <Typography>Price:</Typography>
      <TextField
        type="number"
        id="filled-basic"
        value={product.price}
        onChange={(e) =>
          dispatch(updateProduct({ ...product, price: Number(e.target.value) }))
        }
      ></TextField>
      <Typography>Description:</Typography>
      <TextField
        fullWidth
        value={product.description}
        onChange={(e) =>
          dispatch(updateProduct({ ...product, description: e.target.value }))
        }
      ></TextField>
      <Button
        variant="outlined"
        sx={{ m: 2 }}
        onClick={() =>
          navigate(`${routes.navigate}/${params.id}`, { replace: true })
        }
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
