import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    //  maxWidth: "400px",
    padding: "10px 40px",
    position: "sticky",
    top: "64px",
    height: "100vh",
    borderLeft: "1px solid #ebedee",
    fontFamily:
      '"Noto Sans","AdihausDIN","Helvetica",Arial,sans-serif !important',
  },
  rating: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "36px",
    marginTop: "15px",
    letterSpacing: "1px",
    fontStyle: "italic",
    textTransform: "uppercase",
  },
  price: {
    margin: "20px 0",
    fontWeight: "bold",
  },
  selectSize: {
    textTransform: "uppercase",
    fontWeight: "600",
  },
  sizeTable: {
    display: "grid",
    flexWrap: "wrap",
    gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
    borderLeft: "1px solid #ebedee",
    margin: "15px 0",
  },
  size: {
    height: "40px",
    border: "1px solid #ebedee",
    borderLeft: "none",
    marginBottom: "-1px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
      fontWeight: "bold",
    },
    "&.chosen": {
      color: "white",
      backgroundColor: "black",
    },
  },
  color: {
    fontSize: "14px",
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
    flexGrow: 1,
    //  "&:hover": {
    //    color: "#767677",
    //  },
  },
  buttonArea: {
    display: "flex",
    justifyContent: "spacebetween",
  },
  wishList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    width: "48px",
    marginLeft: "15px",
    cursor: "pointer",
  },
  btnWishList: {
    color: "black",
  },
  collections: {
    textTransform: "uppercase",
  },
  btnText: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
}));
