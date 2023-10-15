import React, { useEffect, useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useStockAPI from "../services/useStockAPI";

function AddableMiniSearchBar({ onSelectionChange, onSuggestionsChange }) {
  const [symbol, setSymbol] = useState(null);
  const [localSuggestions, setLocalSuggestions] = useState([]);
  const [selectedSymbols, setSelectedSymbols] = useState([]);
  const navigate = useNavigate();

  const { data, error, isLoading } = useStockAPI(`/search/${symbol}`);

  useEffect(() => {
    if (data && data.body) {
      const newSuggestions = data.body.slice(0, 10);
      setLocalSuggestions(newSuggestions);
      onSuggestionsChange(newSuggestions);
    }
  }, [data, onSuggestionsChange]);

  useEffect(() => {
    onSelectionChange(selectedSymbols);
  }, [selectedSymbols, onSelectionChange]);

  function toggleSelect(symbol) {
    if (selectedSymbols.includes(symbol)) {
      setSelectedSymbols((prev) => prev.filter((s) => s !== symbol));
    } else {
      setSelectedSymbols((prev) => [...prev, symbol]);
    }
  }

  //   function toggleSelect(symbol) {
  //     if (selectedSymbols.includes(symbol)) {
  //       setSelectedSymbols((prev) => {
  //         const updated = prev.filter((s) => s !== symbol);
  //         onSelectionChange(updated);
  //         return updated;
  //       });
  //     } else {
  //       setSelectedSymbols((prev) => {
  //         const updated = [...prev, symbol];
  //         onSelectionChange(updated);
  //         return updated;
  //       });
  //     }
  //   }

  function search() {
    setSymbol(symbol);
  }

  function handleNavigate(symbol) {
    navigate("/stock/" + symbol);
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        <input
          onKeyUp={(e) => setSymbol(e.target.value)}
          className=" mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50"
          placeholder="Search Stock Symbols"
          type="search"
          aria-autocomplete="list"
        />
        <button onClick={search} className="btn btn-primary btn-md">
          <span className="hidden md:block">Search</span>
          <FaSearch className="md:hidden" />
        </button>
      </div>

      {symbol && isLoading && <div>Loading localSuggestions...</div>}
      {localSuggestions.length > 0 && (
        <div className="py-2 flex items-center">
          <HiOutlineLightBulb /> Top matching results
        </div>
      )}
      {localSuggestions && localSuggestions.length > 0 && (
        <div className="mt-4">
          {localSuggestions.map((s) => (
            <div
              key={s.symbol}
              className="flex justify-between items-center py-2 hover:bg-gray-200 cursor-pointer"
            >
              <div>
                <span className="mr-4">{s.symbol}</span>
                <span>{s.name}</span>
              </div>
              <button
                onClick={() => toggleSelect(s.symbol)}
                className="btn btn-accent btn-sm"
              >
                {selectedSymbols.includes(s.symbol) ? "Deselect" : "Select"}
              </button>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div>
          {data && !data.body.length ? (
            <div>No results found for "{symbol}".</div>
          ) : (
            <div>Some error occurred: {error.message}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default AddableMiniSearchBar;
