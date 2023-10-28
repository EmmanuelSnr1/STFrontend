import React, { useState } from "react";
import axios from "axios";

function AddWatchlistsModal({ isOpen, onClose, refetch }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = async () => {
    const payload = {
      name: name,
      description: description,
    };

    try {
      await axios.post("http://localhost:8090/api/watchlist", payload, {
        withCredentials: true,
      });
      onClose(); // Close the modal after successful creation
      // Optionally, you can also refetch the watchlist data or update the local state to reflect the changes
    } catch (error) {
      console.error("Error creating watchlist:", error);
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
        <h3 className="font-bold text-lg">Add Watchlist</h3>
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
            placeholder="Enter watchlist name"
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
            placeholder="Enter watchlist description"
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

export default AddWatchlistsModal;
