import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  content: {
    padding: "15px",
    border: "1px solid #eceff1",
    //  maxWidth: "380px",
  },
  summary: {
    display: "flex",
    justifyContent: "space-between",
    lineHeight: "30px",
  },
  title: {
    textTransform: "uppercase",
    "&.bold": {
      fontWeight: "bold",
    },
  },
  detail: {
    textTransform: "uppercase",
    "&.bold": {
      fontWeight: "bold",
    },
  },
  orderTitle: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "18px",
  },
}));
