import { createUseStyles } from "react-jss";

// how can I use theme here?
// tried to use "useTheme and pass it as prop to useStyle and i wanted to set the name background with primary color on the theme but failed "
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
