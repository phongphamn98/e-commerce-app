import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = ({
  height,
  display,
  justifycontent,
  alignitems,
  flexwrap,
  padding,
  width,
  maxwidth,
  flexdirection,
  margin,
  flexgap,
  fontsize,
  lineheight,
  fontweight,
  backgroundcolor,
  border,
  boxsizing,
  position,
  flex,
  flexbasis,
  texttransform,
  color,
  textDecoration,
  cursor,
  bottom,
  left,
  top,
  right,
  visibility,
  opacity,
  transition,
}) =>
  makeStyles((theme) => {
    return {
      root: {
        height: height,
        display: display,
        justifyContent: justifycontent,
        alignItems: alignitems,
        flexWrap: flexwrap,
        padding: padding,
        width: width,
        maxWidth: maxwidth,
        flexDirection: flexdirection,
        margin: margin,
        gap: flexgap,
        fontSize: fontsize,
        lineHeight: lineheight,
        fontWeight: fontweight,
        backgroundColor: backgroundcolor,
        border: border,
        boxSizing: boxsizing,
        position: position,
        flex: flex,
        flexBasis: flexbasis,
        textTransform: texttransform,
        color: color,
        textDecoration: textDecoration,
        cursor: cursor,
        bottom: bottom,
        left: left,
        top: top,
        right: right,
        visibility: visibility,
        opacity: opacity,
        transition: transition,
      },
    };
  });

const PhongDiv = ({ children, onClick, ...props }) => {
  let { className, ...otherProps } = props;
  const classes = useStyles(props)();
  let classNames = [classes.root, className].join(" ");
  return (
    <div onClick={onClick} className={classNames}>
      {children}
    </div>
  );
};

export default PhongDiv;
