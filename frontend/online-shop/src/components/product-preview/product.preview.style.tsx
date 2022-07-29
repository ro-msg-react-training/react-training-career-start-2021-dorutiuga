import { createUseStyles } from "react-jss";

export const useStyle = createUseStyles({
  footer1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    fontSize: "20px",
    padding: "10px",
  },

  img: {
    maxWidth: "100%",
    maxHeight: "250px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
});
