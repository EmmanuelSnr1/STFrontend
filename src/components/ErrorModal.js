// ErrorModal.js
// Not sure if this modal is working.
import React from "react";

function ErrorModal({ isOpen, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Error</h2>
        <p>{message}</p>
        <button onClick={onClose} className="mt-4 btn btn-primary">
          Close
        </button>
      </div>
      <div className="fixed inset-0 bg-black opacity-50"></div>
    </div>
  );
}

export default ErrorModal;
