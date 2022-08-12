import { FC } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";
import { Product } from "../../models/product.model";
import { useAppDispatch } from "../../store/hooks";
import {
  increaseQuantity,
  decreaseQuantity,
  removeProductAction,
} from "../../store/slices/cart-slice";
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
}
const CheckoutItem: FC<CheckoutItemProps> = ({ product, quantity }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={product.image} style={{ width: "100px" }} alt="item" />
        </ImageContainer>
        <Name>{product.name}</Name>
        <Quantity>
          <Arrow onClick={() => dispatch(decreaseQuantity(product))}>
            <BiChevronLeft size={30} />
          </Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={() => dispatch(increaseQuantity(product))}>
            <BiChevronRight size={30} />
          </Arrow>
        </Quantity>
        <Price>${product.price}</Price>
        <RemoveButton onClick={() => dispatch(removeProductAction(product))}>
          <MdOutlineClear size={26} />
        </RemoveButton>
      </CheckoutItemContainer>
    </>
  );
};

export default CheckoutItem;
