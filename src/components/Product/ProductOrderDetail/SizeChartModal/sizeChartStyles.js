import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  sizeChart: {
    height: "300px",
    width: "300px",
    backgroundColor: "white",
  },
  chartSize: {
    textTransform: "uppercase",
    textDecoration: "underline",
    margin: "10px 0 30px 0",
    display: "inline-flex",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
    "& span": {
      marginLeft: "5px",
      fontSize: "14px",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
