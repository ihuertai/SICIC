import "./style.css";

import { IconButton, Modal } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import React from "react";

export default function ReusableModal({ open, onClose, title, children }) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-box">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="modal-content">
          {children}
        </div>
      </div>
    </Modal>
  );
}
