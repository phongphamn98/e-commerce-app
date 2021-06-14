import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  title: {
    display: "flex",
    alignItems: "center",
    //  flexGrow: 1,
  },
  image: {
    marginRight: "10px",
  },
  appBar: {
    //  display: "flex",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
}));
