import { useState, useRef, useEffect } from "react";
import axios from "axios"; // Assuming you're using axios for HTTP requests
import AddableMiniSearchBar from "./AddableMiniSearchBar";

export default function AddStocksModal({ isOpen, onClose, watchlistId }) {
  const [selectedSymbols, setSelectedSymbols] = useState([]);
  const [suggestions, setSuggestions] = useState([]); // Add this line
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleSave = async () => {
    const payload = selectedSymbols.map((symbol) => ({
      symbol: symbol,
      name: suggestions.find((s) => s.symbol === symbol)?.name || "",
    }));

    try {
      await axios.post(
        `http://localhost:8090/api/watchlist/${watchlistId}/stocks`,
        payload,
        {
          withCredentials: true,
        }
      );
      onClose(); // Close the modal after successful save
    } catch (error) {
      console.error("Error saving symbols:", error);
    }
    console.log("The payload ", payload);

    console.log("Selected Symbols:", selectedSymbols);
    console.log("Suggestions:", suggestions);
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Add Symbols</h3>
        <br></br>
        <AddableMiniSearchBar
          onSelectionChange={setSelectedSymbols}
          onSuggestionsChange={setSuggestions} // Pass the setSuggestions function
        />
        <div className="modal-action">
          <button className="btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </dialog>
  );
}
