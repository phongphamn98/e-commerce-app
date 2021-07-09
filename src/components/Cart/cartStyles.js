import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  content: {
    fontFamily: `"Noto Sans","AdihausDIN","Helvetica",Arial,sans-serif !important`,
    flexGrow: 1,
    //  padding: "15px 0",
    //  display: "flex",
    //  flexWrap: "wrap",
    gap: "2em",
  },
  leftContent: {
    //  maxWidth: "800px",
    //  width: "100%",
    flex: "1 1 60%",
  },
  orderSummary: {
    flex: "1 1 40%",
    minWidth: "30ch",
    gap: "2em",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
  },
  total: {
    // fontWeight: "bold",
    fontWeight: "500",
    lineHeight: "25px",
  },
  money: {
    fontWeight: "bold",
  },
  discount: {
    marginTop: "30px",
    width: "100%",
    border: "none",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: 0,
    },
  },
  btnText: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  btnOrder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 10px",
    paddingRight: 0,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
    backgroundColor: "black",
    cursor: "pointer",
    //  "&:hover": {
    //    color: "#767677",
    //  },
  },
  myCart: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  //   noItem: {
  //      textTransform: "uppercase",
  //      fontWeight: "bold",

  //   }
}));
