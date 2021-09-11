import { Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import Media from "react-media";
import PhongDiv from "../../General/PhongDiv";
import { WithWizard } from "react-albus";
import { useHistory, useLocation } from "react-router-dom";
import { LocalTaxiOutlined } from "@material-ui/icons";
const steps = [
  { id: 1, name: "Giỏ hàng", goTo: "/cart" },
  { id: 2, name: "thanh toán", goTo: "/delivery" },
  { id: 3, name: "giao hàng", goTo: "/payment" },
  { id: 4, name: "hoàn thành đơn hàng", goTo: "/complete" },
];
const useStyles = makeStyles(() => ({
  stepsNav: {
    //  borderBottom: "1px solid #c1c1c1",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: "1px",
      background: "#c8cbcc",
      boxShadow: "-60px 0 0 #c8cbcc, 60px 0 0 #c8cbcc",
    },
  },
}));

const StepsNav = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  //   console.log("location", location.pathname);
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    setActiveTab(location.pathname);
    const tab = steps.find((step) => step.goTo === location.pathname);
    setCurrentStep(tab.id);
  }, [location]);
  const step = (stepNum, title, goTo, isActive = false) => {
    let canTouch = stepNum > currentStep ? "#767677" : "black";
    return (
      <PhongDiv
        padding="16px 0"
        margin="0 20px 0 0"
        display="flex"
        alignitems="center"
        flexgap="0.5rem"
        zindex={1}
        borderbottom={isActive ? "1px solid black" : "0"}
        cursor={!(stepNum > currentStep) ? "pointer" : false}
        onClick={() => {
          if (!(stepNum > currentStep)) {
            setActiveTab(goTo);
            history.push(goTo);
          }
        }}
      >
        <div
          style={{
            height: "24px",
            width: "24px",
            fontSize: "12px",
            color: "white",
            fontWeight: "bold",
            borderRadius: "50%",
            backgroundColor: canTouch,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {stepNum}
        </div>
        <PhongDiv
          fontsize="14px"
          letterspacing="2px"
          fontweight="bold"
          texttransform="uppercase"
          color={canTouch}
        >
          {title}
        </PhongDiv>
      </PhongDiv>
    );
  };

  return (
    <Media
      queries={{
        medium: "(max-width: 959px)",
        large: "(min-width: 960px) and (max-width: 1280px)",
        xLarge: "(min-width: 1280px",
      }}
    >
      {(matches) => (
        <PhongDiv margin="0 0 30px 0" className={classes.stepsNav}>
          <PhongDiv
            margin="auto"
            maxwidth={matches.xLarge ? "1280px" : "1175px"}
            padding="0 16px"
            display="flex"
          >
            {steps.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  {step(
                    item.id,
                    item.name,
                    item.goTo,
                    activeTab == item.goTo && true
                  )}
                </React.Fragment>
              );
            })}
          </PhongDiv>
        </PhongDiv>
      )}
    </Media>
  );
};

export default StepsNav;
