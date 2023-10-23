import React, { useState } from "react";
import axios from "axios";

function AddPortfolioModal({ isOpen, onClose, refetch }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = async () => {
    const payload = {
      name: name,
      description: description,
      // You don't need to set the 'user' field here since it's set on the server-side
    };

    try {
      await axios.post("http://localhost:8090/api/portfolio", payload, {
        withCredentials: true,
      });
      onClose(); // Close the modal after successful creation
      // Optionally, you can also refetch the portfolio data or update the local state to reflect the changes
    } catch (error) {
      console.error("Error creating portfolio:", error);
    }
    refetch();
  };

  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box bg-stmodal">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Add New Portfolio</h3>
        <br />

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Portfolio name"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Portfolio description"
          ></textarea>
        </div>

        <div className="modal-action">
          <button className="btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default AddPortfolioModal;
