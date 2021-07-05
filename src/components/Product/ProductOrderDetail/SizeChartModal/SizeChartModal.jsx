import { faRulerHorizontal } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import useStyles from "./sizeChartStyles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@material-ui/core/Modal";
import SizeChartContent from "./SizeChartContent";
import PhongDiv from "../../../../General/PhongDiv";

const SizeChartModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div onClick={handleOpen} className={classes.chartSize}>
        <FontAwesomeIcon icon={faRulerHorizontal} />
        <span>Biểu đồ kích cỡ</span>
      </div>
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
          <SizeChartContent />
        </Fade>
      </Modal>
    </>
  );
};

export default SizeChartModal;
