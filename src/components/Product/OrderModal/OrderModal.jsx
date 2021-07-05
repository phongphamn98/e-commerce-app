import { Backdrop, Fade, Modal } from "@material-ui/core";
import React, { useState } from "react";
import ButtonWithArrow from "../../../General/ButtonWithArrow";
import OrderContent from "./OrderContent";
import useStyles from "./orderModalStyles";
const OrderModal = ({ addProductToCart, product, size, handleSize }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <React.Fragment>
      <ButtonWithArrow
        onClick={() => {
          if (size !== 0 && size !== 1) {
            handleOpen();
            addProductToCart(product);
          }
          if (size === 0) {
            handleSize();
          }
        }}
        text="Thêm vào giỏ hàng"
        isBlackBackground={true}
      />
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <OrderContent product={product} size={size} />
        </Fade>
      </Modal>
    </React.Fragment>
  );
};

export default OrderModal;
