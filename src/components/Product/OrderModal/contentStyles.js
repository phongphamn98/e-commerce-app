import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  content: {
    border: "1px solid #000",
    boxShadow: theme.shadows[5],
    backgroundColor: "white",
    maxHeight: "100%",
    padding: "15px",

    "& h1": {
      marginTop: 0,
    },
  },
  img: {
    width: "100%",
  },
  urCartConent: {
    borderLeft: "1px solid #000",
  },
  divider: {
    margin: "6px 0",
    borderBottom: "1px solid #767677",
  },
}));
