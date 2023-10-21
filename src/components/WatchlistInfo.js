import { WatchListEmpty } from "../components/WatchListEmpty";
import { RxDropdownMenu } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import useWatchlistAPI from "../services/useWatchlistAPI";
import { useNavigate } from "react-router-dom";
import NumberFormat from "react-number-format";
import { useState, useEffect } from "react";
import AddStocksModal from "./AddStocksModal";
import EditStocksModal from "./EditStocksModal";
import EditWatchlistModal from "./EditWatchlistModal";
import AddWatchlistsModal from "./AddWatchlistsModal";

export function WatchlistInfo() {
  const { watchlist, isLoading, isError, refetch } =
    useWatchlistAPI("my-watchlist");
  const [selectedWatchlistId, setSelectedWatchlistId] = useState(""); // Initialize to an empty string
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isEditWatchlistModalOpen, setEditWatchlistModalOpen] = useState(false);
  const [isAddWatchlistModalOpen, setAddWatchlistModalOpen] = useState(false);

  const handleWatchlistChange = (watchlistId) => {
    if (!watchlistId) return;
    setSelectedWatchlistId(watchlistId);
    // Store the selected watchlist ID in localStorage
    localStorage.setItem("selectedWatchlistId", watchlistId.toString());

    // Close the dropdown
    const dropdownDialog = document.getElementById("your_dropdown_dialog_id");
    if (dropdownDialog) {
      dropdownDialog.removeAttribute("open");
    }
  };

  useEffect(() => {
    // Get the selected watchlist ID from localStorage when the component mounts
    const storedWatchlistId = localStorage.getItem("selectedWatchlistId");
    if (storedWatchlistId) {
      setSelectedWatchlistId(Number(storedWatchlistId));
    }
  }, []);

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
          {stock.percentageChange ? stock.percentageChange.toFixed(2) : "N/A"} %
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
        <div className="font-bold text-base">
          {selectedWatchlist ? selectedWatchlist.name + "  " : "Your WatchList"}
          <div className="space-x-2 dropdown dropdown-bottom">
            <button tabIndex={0} className="btn btn-circle btn-sm btn-primary">
              <RxDropdownMenu />
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              {watchlist.map((wl) => (
                <li key={wl.id} onClick={() => handleWatchlistChange(wl.id)}>
                  <a>{wl.name + "  " || "Unnamed Watchlist"}</a>
                </li>
              ))}
              <li className="text-accent">
                <a onClick={() => setAddWatchlistModalOpen(true)}>
                  Create a new Watchlist
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-x-2 dropdown dropdown-bottom dropdown-end">
          <button tabIndex={0} className="btn btn-circle btn-sm btn-primary">
            <FaPlus />
          </button>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => setModalOpen(true)}>Add Symbols</a>
            </li>
            <li>
              <a onClick={() => setEditModalOpen(true)}>Edit Symbols</a>
            </li>
            <li>
              <a onClick={() => setEditWatchlistModalOpen(true)}>Rename List</a>
            </li>
            <li>
              <a>Sort by...</a>
            </li>
          </ul>
        </div>
      </div>
      <AddStocksModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        watchlistId={selectedWatchlist?.id}
        refetch={refetch}
      />
      <EditStocksModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        watchlistId={selectedWatchlist?.id}
        selectedWatchlist={selectedWatchlist}
        refetch={refetch}
      />
      <EditWatchlistModal
        isOpen={isEditWatchlistModalOpen}
        onClose={() => setEditWatchlistModalOpen(false)}
        watchlistDetails={selectedWatchlist}
        refetch={refetch}
      />
      <AddWatchlistsModal
        isOpen={isAddWatchlistModalOpen}
        onClose={() => setAddWatchlistModalOpen(false)}
        refetch={refetch}
      />

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
