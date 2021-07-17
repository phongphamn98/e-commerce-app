import React from "react";
import Media from "react-media";
import PhongDiv from "./PhongDiv";

const ContainerWithBorder = ({ children, margin = true, ...props }) => {
  return (
    <Media
      queries={{
        medium: "(max-width: 959px)",
        large: "(min-width: 960px) and (max-width: 1280px)",
        xLarge: "(min-width: 1280px",
      }}
    >
      {(matches) => (
        <PhongDiv
          border={!matches.medium ? "1px solid #eceff1" : "none"}
          padding={!matches.medium ? "10px" : "0"}
          margin={margin ? "20px 0 0 0" : "0"}
        >
          {children}
        </PhongDiv>
      )}
    </Media>
  );
};

export default ContainerWithBorder;
