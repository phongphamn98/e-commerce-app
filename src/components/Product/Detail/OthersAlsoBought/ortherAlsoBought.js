import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  arrow: {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    fontSize: "30px",
    cursor: "pointer",
    position: "absolute",
    backgroundColor: "white",
    zIndex: 1,
    top: "30%",
    transition: "all .2s",
    "&.right": {
      right: "22px",
    },
    "&.left": {
      left: "19px",
    },
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  carousel: {
    "& .rec-item-wrapper": {
      height: "100%",
    },
  },
  indicators: {
    transition: ".1s cubic-bezier(0.3,0,0.45,1)",
    "&:hover div": {
      height: "4px",
    },
  },
}));
