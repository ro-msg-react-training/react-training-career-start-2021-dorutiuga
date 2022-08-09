import { FC } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";
import {
  handleAddItemToCart,
  handleDecreaseQuantity,
  removeProduct,
} from "../../helpers/cart.utils";
import { CartItems } from "../../models/cart-items.model";
import { Product } from "../../models/product.model";

import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.style";

interface CheckoutItemProps {
  product: Product;
  quantity: number;
  setCart: React.Dispatch<React.SetStateAction<CartItems[]>>;
}
const CheckoutItem: FC<CheckoutItemProps> = ({
  product,
  quantity,
  setCart,
}) => {
  return (
    <>
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={product.image} style={{ width: "100px" }} alt="item" />
        </ImageContainer>
        <Name>{product.name}</Name>
        <Quantity>
          <Arrow onClick={() => handleDecreaseQuantity(product, setCart)}>
            <BiChevronLeft size={30} />
          </Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={() => handleAddItemToCart(product, setCart)}>
            <BiChevronRight size={30} />
          </Arrow>
        </Quantity>
        <Price>${product.price}</Price>
        <RemoveButton onClick={() => removeProduct(product, setCart)}>
          <MdOutlineClear size={26} />
        </RemoveButton>
      </CheckoutItemContainer>
    </>
  );
};

export default CheckoutItem;
