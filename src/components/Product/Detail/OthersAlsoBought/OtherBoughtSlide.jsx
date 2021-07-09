import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import { OtherProductsContext } from "../../../../Context/OtherProductsContext";
import PhongDiv from "../../../../General/PhongDiv";
import useStyles from "./ortherAlsoBought";
import Product from "./../../Product";
import { Button } from "@material-ui/core";
import ProductCart from "./../../../../General/ProductCart";

const breakPoints = [
  { width: 549, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1200, itemsToShow: 4 },
];
const OtherBoughtSlide = () => {
  const { otherProducts } = useContext(OtherProductsContext);
  const classes = useStyles();
  const LongArrowRight = (isEdge) => {
    return (
      <PhongDiv
        visibility={isEdge ? "hidden" : "inherit"}
        opacity={isEdge ? 0 : 1}
        transition="all .2s"
        className={`${classes.arrow + " right"}`}
      >
        <FontAwesomeIcon icon={faLongArrowAltRight} />
      </PhongDiv>
    );
  };

  const LongArrowLeft = (isEdge) => {
    return (
      <PhongDiv
        visibility={isEdge ? "hidden" : "inherit"}
        opacity={isEdge ? 0 : 1}
        transition="all 1s"
        className={`${classes.arrow + " left"}`}
      >
        <FontAwesomeIcon icon={faLongArrowAltLeft} />
      </PhongDiv>
    );
  };

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? LongArrowLeft(isEdge) : LongArrowRight(isEdge);
    return <PhongDiv onClick={onClick}>{pointer}</PhongDiv>;
  };

  return (
    <PhongDiv className={classes.carousel} position="relative">
      <Carousel
        // breakPoints={breakPoints}
        itemsToShow={4}
        itemsToScroll={2}
        disableArrowsOnEnd={false}
        renderArrow={myArrow}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <PhongDiv
              height="30px"
              alignitems="flex-end"
              display="flex"
              flexdirection="row"
            >
              {pages.map((page) => {
                const isActivePage = activePage === page;
                return (
                  <PhongDiv
                    className={classes.indicators}
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                    padding="4px 3px"
                    cursor="pointer"
                  >
                    <PhongDiv
                      transition=".1s cubic-bezier(0.3,0,0.45,1)"
                      height={isActivePage ? "4px" : "1px"}
                      width="18px"
                      backgroundcolor="black"
                      cursor="pointer"
                    ></PhongDiv>
                  </PhongDiv>
                );
              })}
            </PhongDiv>
          );
        }}
        itemPadding={[5, 5]}
      >
        {otherProducts.map((product) => {
          return (
            <Product
              key={product._id}
              isChangeImage={false}
              product={product}
            />
          );
        })}
      </Carousel>
    </PhongDiv>
  );
};

export default OtherBoughtSlide;
