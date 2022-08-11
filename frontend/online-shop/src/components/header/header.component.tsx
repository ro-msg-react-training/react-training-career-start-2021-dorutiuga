import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AddLink, HeaderComponent, OptionLink } from "./header.style";
import { routes } from "../../helpers/routes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { unsubscribeUser } from "../../store/slices/user-slice";

const Header = () => {
  interface Links {
    route: string;
    label: string;
    needsUser?: boolean;
    hasButton?: boolean;
  }

  const headerLinks: Links[] = [
    {
      route: routes.homepage,
      label: "Home",
    },
    {
      route: routes.ordersHistory,
      label: "Order History",
      needsUser: true,
    },
    {
      route: routes.products,
      label: "Products",
    },

    { route: routes.cart, label: "Cart" },
    {
      route: routes.addProduct,
      label: "Add Product",
      needsUser: true,
      hasButton: true,
    },
  ];

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(unsubscribeUser());
  };

  return (
    <HeaderComponent>
      {headerLinks.map(
        (link) =>
          (!link.needsUser || user) && (
            <Link
              key={link.route}
              style={{ textDecoration: "none" }}
              to={link.route}
            >
              <OptionLink>
                <Typography>
                  {!link.hasButton ? (
                    link.label
                  ) : (
                    <AddLink>
                      <Button variant="outlined">Add new product</Button>
                    </AddLink>
                  )}
                </Typography>
              </OptionLink>
            </Link>
          )
      )}
      {user ? (
        <Link
          style={{ textDecoration: "none" }}
          to={routes.login}
          onClick={handleLogout}
        >
          <OptionLink>
            <Typography> Logout</Typography>
          </OptionLink>
        </Link>
      ) : (
        <>
          <Link to={routes.login} style={{ textDecoration: "none" }}>
            <OptionLink>
              <Typography> Login </Typography>
            </OptionLink>
          </Link>
        </>
      )}
    </HeaderComponent>
  );
};

export default Header;
