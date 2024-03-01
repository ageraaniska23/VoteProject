/* eslint-disable react/prop-types */
// VisiModal.jsx
import React from "react";

const VisiModal = ({ id, title, content1, content2, onClose }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box w-11/12 max-w-3xl bg-gray-700">
        <h3 className="font-bold text-lg text-gray-50 text-center">{title}</h3>
        <p className="py-4 text-gray-50">{content1}</p>
        <p className="py-4 text-gray-50">{content2}</p>
        <div className="modal-action">
          <button className="btn bg-red-600 hover:bg-blue-500 rounded-full text-white hover:text-cyan-600" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default VisiModal;

