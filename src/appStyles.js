import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  toolbar: {
    height: "64px",
  },
  app: {
    fontFamily: `'Noto Sans','AdihausDIN','Helvetica',Arial,sans-serif !important`,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flexGrow: 1,
    padding: "20px 10px",
  },
  stepsNav: {
    margin: "-20px -10px",
    marginBottom: "30px",
  },
}));
