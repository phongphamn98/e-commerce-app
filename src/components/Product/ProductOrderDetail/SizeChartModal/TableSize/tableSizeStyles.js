import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  table: {
    minWidth: 850,
    "& .MuiTableCell-root": {
      borderBottom: "none",
    },
  },
  tableContent: {
    borderRadius: "0",
    boxShadow: "none",
  },
}));
