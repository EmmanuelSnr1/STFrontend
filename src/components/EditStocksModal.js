import { useRef, useState, useEffect } from "react";
import axios from "axios"; // Assuming you're using axios for HTTP requests

// EditStocksModal.js

export default function EditStocksModal({
  isOpen,
  onClose,
  watchlistId,
  selectedWatchlist,
  refetch,
}) {
  const dialogRef = useRef(null);
  const [stocksToDelete, setStocksToDelete] = useState([]);

  const handleToggleDelete = (stockId) => {
    if (stocksToDelete.includes(stockId)) {
      setStocksToDelete((prev) => prev.filter((id) => id !== stockId));
    } else {
      setStocksToDelete((prev) => [...prev, stockId]);
    }
  };

  const handleSave = async () => {
    if (stocksToDelete.length > 0) {
      try {
        await axios.delete(
          `http://localhost:8090/api/watchlist/${watchlistId}/stocks`,
          {
            data: stocksToDelete,
            withCredentials: true,
          }
        );
        onClose(); // Close the modal after successful deletion
        setStocksToDelete([]); // Clear the stocksToDelete list
      } catch (error) {
        console.error("Error deleting stocks:", error);
      }
    }
    refetch();
  };

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box bg-stmodal">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Edit Symbols</h3>
        <br></br>
        {/* Render the list of stocks here with a "Delete/Undelete" button next to each stock */}
        {selectedWatchlist?.stocks?.map((stock) => (
          <div key={stock?.id} className="flex justify-between items-center">
            <span>{stock?.symbol}</span>
            <span>{stock?.name}</span>
            <button
              onClick={() => handleToggleDelete(stock.id)}
              className="btn text-white bg-stocxtunered btn-sm"
            >
              {stocksToDelete.includes(stock.id) ? "Undelete" : "Delete"}
            </button>
          </div>
        ))}
        <br></br>
        <div className="modal-action">
          <button className="btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </dialog>
  );
}
