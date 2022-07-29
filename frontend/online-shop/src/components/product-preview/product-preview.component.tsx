import { Button, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useStyle } from "./product.preview.style";

interface ProductPreviewProps {
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  id: number;
}

const ProductPreview: FC<ProductPreviewProps> = ({
  name,
  price,
  image,
  id,
  description,
  category,
}) => {
  const classes = useStyle();
  let navigate = useNavigate();
  return (
    <Paper elevation={4}>
      <Typography variant="h6">{name}</Typography>

      <img src={image} className={classes.img} alt="" />
      <div className={classes.footer1}>
        <Typography> ${price}</Typography>
        <span>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate(`${id}`);
            }}
          >
            <Typography>See details</Typography>
          </Button>
        </span>
      </div>
    </Paper>
  );
};

export default ProductPreview;
