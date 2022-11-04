import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const StudentModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        width="400px"
        sx={{
          backgroundColor: "white",
          display: "block",
          left: "50%",
          position: "absolute",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};

export default StudentModal;
