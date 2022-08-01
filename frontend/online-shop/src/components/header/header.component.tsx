import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartLink, HeaderComponent, OptionLink } from "./header.style";
const Header = () => {
  return (
    <HeaderComponent>
      <Link to="/">
        <OptionLink>
          <Typography> Home</Typography>
        </OptionLink>
      </Link>
      <Link to="/products">
        <OptionLink>
          <Typography>Products</Typography>
        </OptionLink>
      </Link>

      <Link to="/cart">
        <CartLink>
          <AiOutlineShoppingCart size={25} color="red" />
        </CartLink>
      </Link>
    </HeaderComponent>
  );
};

export default Header;
