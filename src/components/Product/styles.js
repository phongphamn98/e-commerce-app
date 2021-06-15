import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    padding: "15px",
    cursor: "pointer",
    transition: "all 0.25s ease-out",
    boxShadow: "none",
    border: "1px solid #e2e2cd",
    "&:hover": {
      color: "blue",
      transform: "translateZ(0) scale(1.008)",
      boxShadow:
        "0 0 1px 0 rgb(8 11 14 / 6%), 0 16px 16px -1px rgb(8 11 14 / 10%)",
    },
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  cardName: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontWeight: "bold",
    transition: "all 1s ease-out",
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
}));
