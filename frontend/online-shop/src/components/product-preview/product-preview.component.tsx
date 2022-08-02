import { Button, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Footer, Image } from "./product.preview.style";

interface ProductPreviewProps {
  name: string;
  price: number;
  image: string;
  id: number;
}

const ProductPreview: FC<ProductPreviewProps> = ({
  name,
  price,
  image,
  id,
}) => {
  let navigate = useNavigate();
  return (
    <Paper elevation={4}>
      <Typography variant="h6">{name}</Typography>

      <Image src={image} alt="" />

      <Footer>
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
      </Footer>
    </Paper>
  );
};

export default ProductPreview;
