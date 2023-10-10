import React, { useEffect, useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { searchSymbols } from "../services/stocksService";
import useStockAPI from "../services/useStockAPI";

function MiniSearchBar() {
  const [symbol, setSymbol] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const { data, error, isLoading } = useStockAPI(`/search/${symbol}`);

  useEffect(() => {
    if (data && data.body) {
      setSuggestions(data.body.slice(0, 10));
    }
  }, [data]);

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
          placeholder="Search Stock Portfolios"
          type="search"
          aria-autocomplete="list"
        />
        <button onClick={search} className="btn btn-primary btn-md">
          <span className="hidden md:block">Search</span>
          <FaSearch className="md:hidden" />
        </button>
      </div>

      <div className="py-4 px-4 space-x-2 space-y-2 max-w-xl">
        {symbol && isLoading && <div>Loading suggestions...</div>}
        {suggestions.length > 0 && (
          <div className="py-2 flex items-center">
            <HiOutlineLightBulb /> Top matching results
          </div>
        )}
        {suggestions &&
          suggestions.map((s) => (
            <button
              onClick={() => handleNavigate(s.symbol)}
              key={s.symbol}
              className="btn btn-accent btn-sm"
            >
              {s.symbol}
            </button>
          ))}
      </div>

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

export default MiniSearchBar;
