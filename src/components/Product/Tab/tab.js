import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
  menu: {
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid #ebedee",
    margin: "20px 0",
    position: "sticky",
    top: "64px",
    background: "white",
    paddingTop: "20px",
    zIndex: 1,
  },
  text: {
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "14px",
    fontWeight: "600",
    marginLeft: "20px",
    //  borderBottom: "3px solid black",
    borderBottom: "3px solid white",
    display: "inline-block",
    paddingBottom: "20px",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "3px solid #767677",
    },
  },
}));
