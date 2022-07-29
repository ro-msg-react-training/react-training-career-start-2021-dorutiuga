import { Button, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { useStyle } from "./product.preview.style";

interface ProductPreviewProps {
  name: string;
  price: number;
  image: string;
}

const ProductPreview: FC<ProductPreviewProps> = ({ name, price, image }) => {
  const classes = useStyle();
  return (
    <Paper elevation={4}>
      <Typography variant="h6">{name}</Typography>

      <img src={image} className={classes.img} alt="" />
      <div className={classes.footer1}>
        <Typography> ${price}</Typography>
        <span>
          <Button variant="contained" color="secondary">
            <Typography>See details</Typography>
          </Button>
        </span>
      </div>
    </Paper>
  );
};

export default ProductPreview;
