import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    //  padding: "15px",
    cursor: "pointer",
    transition: "all 0.1s ease-out",
    boxShadow: "none",
    border: "1px solid #eceff1",
    height: "100%",
    textDecoration: "none",
    "&,.MuiPaper-rounded": {
      borderRadius: 0,
    },
    "& .price": {
      transition: "all 0.3s",
    },
    "&:hover": {
      border: "1px solid black",
      "& .price": {
        bottom: "10px",
      },
    },
  },
  cartMedia: {
    position: "relative",
  },
  btnWishList: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  media: {
    height: 0,
    backgroundSize: "contain",
    paddingTop: "100%", // 16:9
  },
  cardName: {
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontWeight: "bold",
    transition: "all 1s ease-out",
    textTransform: "uppercase",
  },
  cardPrice: {
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
  },
  btnBuy: {
    color: "white",
    backgroundColor: "red",
    "&:hover": {
      backgroundColor: "#dc1f1f",
    },
  },
  link: {
    textDecoration: "none",
    backgroundColor: "#eceff1",
    height: "100%",
  },
}));
