import { styled } from "@mui/material";


export const CheckoutItemContainer = styled("div")({
    width: "100%",  
    display: "flex",
    minHeight: "100px",
    borderBottom: "1px solid darkgrey",
    padding: "15px 0",
    fontSize: "20px",
    alignItems: "center"
  });
  
  
  export const ImageContainer = styled("div")({
    width: "20%",
    paddingRight: "15px"
  })

  export const Name = styled("div")({
    width: "20%",
  })

  export const Quantity = styled("div")({
    width: "20%",
    display:"flex"  
  })

  export const Price = styled("div")({
    width: "20%",
  })

  export const Arrow = styled("div")({
    cursor: "pointer"
  })

  export const Value = styled("div")({
    margin:"0 10px"
  })

  export const RemoveButton = styled("div")({
    cursor: "pointer",
    paddingLeft:"12px"
  })