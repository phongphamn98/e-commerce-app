import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  title: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    textDecoration: "none",
    color: "black",
  },
  image: {
    marginRight: "10px",
  },
  appBar: {
    borderBottom: "1px solid #ebedee",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  signin: {
    cursor: "pointer",
    marginLeft: "10px",
  },
}));
