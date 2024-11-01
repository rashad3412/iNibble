import React, { useState } from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        {children}
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
