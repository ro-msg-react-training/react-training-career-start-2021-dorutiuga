import { styled } from "@mui/system";

export const CheckoutContainer = styled("div")({

    minHeight:"90vh",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    margin: "50px auto 0"
})

export const CheckoutHeader = styled("div")({
    width:"100%",
    padding:"10px 0 ",
    display:"flex",
    justifyContent:"space-between",
    borderBottom:"1px solid darkgrey"
})

export const HeaderBlock = styled("div")({
    textTransform: "uppercase",
    color:"darkblue",
    width:"23%"
})