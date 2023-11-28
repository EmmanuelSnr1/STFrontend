import React, { useState } from "react";
import axios from "axios"; // Assuming you're using axios for HTTP requests

export default function EditWatchlistModal({
  isOpen,
  onClose,
  watchlistDetails,
  refetch,
}) {
  const [name, setName] = useState(watchlistDetails?.name || "");
  const [description, setDescription] = useState(
    watchlistDetails?.description || ""
  );

  const handleSave = async () => {
    const payload = {
      name: name,
      description: description,
      // Add any other necessary fields from WatchlistDTO if needed
    };

    try {
      await axios.put(
        `http://localhost:8090/api/watchlist/${watchlistDetails?.id}/details`,
        payload,
        {
          withCredentials: true,
        }
      );
      onClose();
    } catch (error) {
      console.error("Error updating watchlist details:", error);
    }
    refetch();
  };

  return (
    <dialog open={isOpen} className="modal">
      <div className="modal-box bg-gradient-to-b from-teal to-stmodal">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Edit Watchlist Details</h3>
        <br></br>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 text-black p-2 w-full border rounded-md"
            placeholder="Enter watchlist name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 text-black p-2 w-full border rounded-md"
            placeholder="Enter watchlist description"
          ></textarea>
        </div>

        <div className="modal-action">
          <button className="btn bg-dark-teal" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </dialog>
  );
}
