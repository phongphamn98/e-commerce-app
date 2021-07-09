import React from "react";
import Media from "react-media";
import PhongDiv from "../General/PhongDiv";

const LoginPage = () => {
  return (
    <Media
      queries={{
        small: "(max-width: 640px)",
        medium: "(min-width: 641px) and (max-width: 1007px)",
        large: "(min-width: 1008px) ",
      }}
    >
      {(matches) => <PhongDiv></PhongDiv>}
    </Media>
  );
};

export default LoginPage;
