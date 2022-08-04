import { styled } from "@mui/system";

export const HeaderComponent = styled("div")({
  position: "sticky",
  textDecoration: "none",
  top: "0",
  display: "flex",
  zIndex: "1",
  height: "70px",
  width: "100%",
  backgroundColor: "#F0F8FF",
  marginBottom: "25px",
});

export const OptionLink = styled("div")(({ theme }) => ({
  textDecorationLine: "none",
  textDecoration: "none",
  color: theme.palette.primary.main,
  marginLeft: "40px",
  margin: "10px",
  display: "flex",
  alignItems: "center",
}));

export const CartLink = styled("div")({
  position: "absolute",
  right: "25px",
  top: "25px",
  cursor: "pointer",
  margin: "auto",
  height: "100%",
});
