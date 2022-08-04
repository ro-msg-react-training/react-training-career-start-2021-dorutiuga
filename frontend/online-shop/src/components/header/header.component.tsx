import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartLink, HeaderComponent, OptionLink } from "./header.style";
import { routes } from "../../helpers/routes";
import { useEffect, useState } from "react";
import { USER_LOCAL_STORAGE_TOKEN } from "../../helpers/strings";
import { User } from "../../models/user";

const Header = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const localUser = localStorage.getItem(USER_LOCAL_STORAGE_TOKEN);
    if (localUser) setUser(JSON.parse(localUser));
    // eslint-disable-next-line
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(USER_LOCAL_STORAGE_TOKEN);
  };
  return (
    <HeaderComponent>
      <Link style={{ textDecoration: "none" }} to={routes.homepage}>
        <OptionLink>
          <Typography> Home</Typography>
        </OptionLink>
      </Link>
      <Link style={{ textDecoration: "none" }} to={routes.products}>
        <OptionLink>
          <Typography>Products</Typography>
        </OptionLink>
      </Link>
      {user ? (
        <p></p>
      ) : (
        <Link style={{ textDecoration: "none" }} to={routes.login}>
          <OptionLink>
            <Typography> Login </Typography>
          </OptionLink>
        </Link>
      )}
      {user ? (
        <Link
          style={{ textDecoration: "none" }}
          to={routes.login}
          onClick={handleLogout}
        >
          <OptionLink>
            <Typography> Logout </Typography>
          </OptionLink>
        </Link>
      ) : (
        <p></p>
      )}
      <Typography style={{ position: "absolute", top: "10px", right: "50%" }}>
        {user ? `Welcome ${user.fullName}` : ""}
      </Typography>

      <Link to={routes.cart}>
        <CartLink>
          <AiOutlineShoppingCart size={25} color="red" />
        </CartLink>
      </Link>
    </HeaderComponent>
  );
};

export default Header;
