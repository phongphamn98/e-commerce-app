import React from "react";
import PhongDiv from "../../General/PhongDiv";
import Media from "react-media";
import ShipmentDetails from "./ShipmentDetails/ShipmentDetails";
import OrderDetails from "./OrderDetails/OrderDetails";
import { Grid } from "@material-ui/core";
import { useAuth } from "../../Context/AuthContext";
import AcceptedPayment from "../Cart/AcceptedPayment/AcceptedPayment";
import ButtonWithArrow from "../../General/ButtonWithArrow";

const Delivery = () => {
  const { currentUser } = useAuth();
  return (
    <Media
      queries={{
        medium: "(max-width: 959px)",
        large: "(min-width: 960px) and (max-width: 1280px)",
        xLarge: "(min-width: 1280px",
      }}
    >
      {(matches) => (
        <React.Fragment>
          <PhongDiv
            padding="0 15px 30px"
            margin="0 auto"
            maxwidth={matches.xLarge ? "1280px" : "1175px"}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <PhongDiv margin="0">
                  <ShipmentDetails
                    matches={matches}
                    currentUser={currentUser}
                  />
                </PhongDiv>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                {!matches.medium && (
                  <PhongDiv>
                    <OrderDetails currentUser={currentUser} />
                  </PhongDiv>
                )}
                <PhongDiv margin={!matches.medium ? "40px 0 0 0" : "0"}>
                  <AcceptedPayment />
                </PhongDiv>
              </Grid>
            </Grid>
          </PhongDiv>
        </React.Fragment>
      )}
    </Media>
  );
};

export default Delivery;
