import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  content: {
    border: "1px solid black",
    height: "267px",
    display: "flex",
    marginTop: "30px",
  },
  cartItemDetail: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  image: {
    "& img": {
      width: "267px",
    },
  },
  iteminfo: {
    display: "flex",
  },
  info: {
    flexGrow: 1,
    //  display: "flex",
    padding: "20px 15px",
  },
  nameAndPrice: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  name: {
    textTransform: "uppercase",
    lineHeight: "24px",
  },
  color: {
    textTransform: "uppercase",
    lineHeight: "24px",
  },
  button: {
    display: "flex",
    flexDirection: "column",
    //  paddingTop: "15px",
    alignItems: "center",
  },
  quantity: {
    paddingLeft: "15px",
    paddingBottom: "20px",
  },
  clearButton: {
    //  paddingTop: 0,
  },
  selectQuantity: {
    //  padding: "5px 10px",
    //  border: "1px solid black",
    //  borderRadius: "5px",
  },
  size: {
    textTransform: "uppercase",
    marginTop: "15px",
  },
  gridImage: {
    display: "flex",
    alignItems: "center",
  },
}));
