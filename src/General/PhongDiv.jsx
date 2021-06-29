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
  flexGap,
  fontsize, 
  lineheight,
  fontweight
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
        gap: flexGap,
        fontSize: fontsize,
        lineHeight: lineheight,
        fontWeight: fontweight
      },
    };
  });

const PhongDiv = ({ children, ...props }) => {
  let { className, ...otherProps } = props;
  const classes = useStyles(props)();
  let classNames = [classes.root, className].join(" ");
  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
};

export default PhongDiv;
