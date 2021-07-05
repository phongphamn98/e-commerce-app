import React from "react";
import useStyles from "./tableSizeStyles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PhongDiv from "../../../../../General/PhongDiv";

const TableSize = () => {
  const createData = (name, size2, size3, size4, size5, size6) => {
    return { name, size2, size3, size4, size5, size6 };
  };

  const rows = [
    createData("EU", "36", "36 2/3", "37 1/3", 38, "38 2/3"),
    createData("UK", "3.5", 4, "4.5", 5, "5.5"),
    createData("US - Nam", "4", "4.5", "5", "5.5", 6),
    createData("US - Nữ", "5.5", "6", "6.5", 7),
  ];

  const classes = useStyles();
  const titles = [
    "Gót và đầu ngón chân",
    "22.1 cm",
    "22.5 cm",
    "22.9 cm",
    "23.3 cm",
    "23.8 cm",
  ];
  return (
    <PhongDiv>
      <TableContainer className={classes.tableContent} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {titles.map((title, index) => (
                <TableCell
                  key={title}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontWeight: "bold",
                    position: "sticky",
                    left: 0,
                    zIndex: `${index === 0 ? 1 : 0}`,
                    width: `${index === 0 ? "145px" : "unset"}`,
                    boxSizing: "border-box",
                  }}
                  align="center"
                >
                  {title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  style={{
                    position: "sticky",
                    left: 0,
                    zIndex: 1,
                    borderRight: "1px solid",
                    backgroundColor: "white",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.size2}</TableCell>
                <TableCell align="center">{row.size3}</TableCell>
                <TableCell align="center">{row.size4}</TableCell>
                <TableCell align="center">{row.size5}</TableCell>
                <TableCell align="center">{row.size6}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PhongDiv>
  );
};

export default TableSize;
