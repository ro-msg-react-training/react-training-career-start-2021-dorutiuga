import {
  handleAddItemToCart,
  handleDecreaseQuantity,
  removeProduct,
} from "../../helpers/cart.utils";

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

const CheckoutItem = ({ product, quantity, setCart }: any) => {
  return (
    <>
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={product.image} style={{ width: "100px" }} alt="item" />
        </ImageContainer>
        <Name>{product.name}</Name>
        <Quantity>
          <Arrow onClick={() => handleDecreaseQuantity(product, setCart)}>
            &#10094;
          </Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={() => handleAddItemToCart(product, setCart)}>
            &#10095;
          </Arrow>
        </Quantity>
        <Price>${product.price}</Price>
        <RemoveButton onClick={() => removeProduct(product, setCart)}>
          &#10005;
        </RemoveButton>
      </CheckoutItemContainer>
    </>
  );
};

export default CheckoutItem;
