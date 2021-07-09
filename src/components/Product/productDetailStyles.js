import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    //  backgroundColor: theme.palette.background.default,
    //  padding: theme.spacing(2),
    //  display: "flex",
    "& .MuiGrid-item": {
      padding: 0,
    },
  },
  slideImage: {
    //  flexGrow: 1,
  },
}));
