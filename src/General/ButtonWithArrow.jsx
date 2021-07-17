import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./buttonStyles";
import PhongDiv from "./PhongDiv";

const ButtonArrow = ({ children, isBlackBackground = true, ...props }) => {
  const classes = useStyles(props);
  const { text, onClick, goTo } = props;
  let history = useHistory();

  const redirect = () => {
    history.push(goTo);
  };
  return (
    <PhongDiv
      className={
        isBlackBackground ? classes.btnOrderWithOutline : classes.btnOrder
      }
      onClick={goTo ? redirect : onClick}
      // width={width}
      {...props}
    >
      <span className={classes.btnText}>{text}</span>
      <IconButton className={classes.btnArrow}>
        <FontAwesomeIcon
          color={isBlackBackground ? "white" : "black"}
          fontSize="30px"
          icon={faLongArrowAltRight}
        />
      </IconButton>
      {children}
    </PhongDiv>
  );
};

export default ButtonArrow;
