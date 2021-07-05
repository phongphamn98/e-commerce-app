import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    maxHeight: "80%",
    overflow: "hidden",
    overflowY: "scroll",
  },
  tableSize: {
    "& p": {
      color: "#767677",
      marginTop: 0,
    },
  },
  title: {
    textTransform: "uppercase",
    letterSpacing: "2px",
    marginTop: 0,
  },
  tips: {
    "& p": {
      color: "black",
      marginTop: 0,
    },
    "& h2": {
      marginBottom: "15px",
    },
  },
  stepContent: {
    padding: "15px",
    "& > *": {
      flexBasis: "100%",
    },
    "& ul": {
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& li": {
        paddingBottom: "10px",
      },
    },
    backgroundColor: "#ebedee",
  },
}));
