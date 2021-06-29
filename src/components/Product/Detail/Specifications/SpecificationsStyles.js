import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  specifications: {
    display: "flex",
    justifyContent: "space-between",
    "& ul": {
      paddingLeft: "20px",
      lineHeight: "40px",
      marginTop: 0,
    },
  },
}));
