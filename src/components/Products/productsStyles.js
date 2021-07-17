import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "content",
    //  padding: theme.spacing(2),
  },
  grid: {
    padding: "1px",
  },
}));
