/* eslint-disable react/prop-types */
// VisiModal.jsx
import React from "react";

const VisiModal = ({ id, title, content1, content2, onClose }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box w-11/12 max-w-5xl">
        <h3 className="font-bold text-lg text-gray-50">{title}</h3>
        <p className="py-4 text-gray-50">{content1}</p>
        <p className="py-4 text-gray-50">{content2}</p>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default VisiModal;
