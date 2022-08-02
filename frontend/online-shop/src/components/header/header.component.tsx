import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartLink, HeaderComponent, OptionLink } from "./header.style";
import { routes } from "../../helpers/routes";

const Header = () => {
  return (
    <HeaderComponent>
      <Link to={routes.homepage}>
        <OptionLink>
          <Typography> Home</Typography>
        </OptionLink>
      </Link>
      <Link to={routes.products}>
        <OptionLink>
          <Typography>Products</Typography>
        </OptionLink>
      </Link>

      <Link to={routes.cart}>
        <CartLink>
          <AiOutlineShoppingCart size={25} color="red" />
        </CartLink>
      </Link>
    </HeaderComponent>
  );
};

export default Header;
