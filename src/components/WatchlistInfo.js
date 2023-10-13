import { WatchListEmpty } from "../components/WatchListEmpty";
import { RxDropdownMenu } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import useWatchlistAPI from "../services/useWatchlistAPI";
import { useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";
import { useState } from "react";

export function WatchlistInfo() {
  const { watchlist, isLoading, isError } = useWatchlistAPI("my-watchlist");
  const [selectedWatchlistId, setSelectedWatchlistId] = useState(""); // Initialize to an empty string
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility
  const navigate = useNavigate();

  const handleWatchlistChange = (event) => {
    if (!event || !event.target) return; // Add this null check
    setSelectedWatchlistId(Number(event.target.value));
    setDropdownVisible(false); // Hide the dropdown once a selection is made
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectedWatchlist = watchlist
    ? watchlist.find((wl) => wl.id === selectedWatchlistId)
    : null;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading watchlist</div>;

  function renderWatchlistRow(stock, navigate) {
    //navigate to the stock's detail page.
    function navigateToDetails() {
      navigate("/stock/" + stock.symbol);
    }

    return (
      <tr
        onClick={navigateToDetails}
        className="hover:bg-primary cursor-pointer"
        key={stock.id}
      >
        <td className="bg-transparent text-accent">
          {stock.name || "Unnamed Company"}
        </td>
        <td
          className={
            stock.percentageChange > 0
              ? "bg-transparent text-green"
              : "bg-transparent text-pink-red"
          }
        >
          {stock.percentageChange ? stock.percentageChange.toFixed(2) : "N/A"}
        </td>
        <td className="bg-transparent text-info">
          <NumberFormat
            value={stock.currentPrice}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </td>
        {/* ... other columns ... */}
      </tr>
    );
  }

  return (
    <div className="px-8 space-y-4 mb-16 pb-8 rounded-xl shadow-lg shadow-accent/20 max-w-full h-96 overflow-x-hidden y-4 bg-gradient-to-b from-darker-teal to-black">
      <div className="flex justify-between pt-8">
        <div className="font-bold text-base">Your WatchList</div>
        <div className="space-x-2">
          <button
            className="btn btn-circle btn-sm btn-primary"
            onClick={toggleDropdown}
          >
            <RxDropdownMenu />
          </button>
          {/* Dropdown for selecting a watchlist */}
          {dropdownVisible && (
            <div className="absolute mt-2 rounded-md shadow-lg bg-teal">
              <select
                value={selectedWatchlistId}
                onChange={handleWatchlistChange}
              >
                <option value="" disabled>
                  Select a Watchlist
                </option>
                {watchlist.map((wl) => (
                  <option key={wl.id} value={wl.id}>
                    {wl.name || "Unnamed Watchlist"}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="space-x-2">
          <button className="btn btn-circle btn-sm btn-primary">
            <FaPlus />
          </button>
        </div>
      </div>
      {selectedWatchlist &&
      selectedWatchlist.stocks &&
      selectedWatchlist.stocks.length > 0 ? (
        <table className="table table-fixed w-auto max-w-screen-lg bg-transparent select-none text-xs">
          <thead>
            <tr className="">
              <th className="bg-transparent capitalize w-0.5/3 text-neutral/80">
                Company
              </th>
              <th className="bg-transparent capitalize w-1/3 text-neutral/80">
                %Gain/loss
              </th>
              <th className="bg-transparent capitalize w-1/3 text-neutral/80">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedWatchlist.stocks.map((stock) =>
              renderWatchlistRow(stock, navigate)
            )}
          </tbody>
        </table>
      ) : (
        <WatchListEmpty />
      )}
    </div>
  );
}
