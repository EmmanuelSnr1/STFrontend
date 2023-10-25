import { MyPortfolioChartEmpty } from "../components/MyPortfolioChartEmpty";
import AddPortfolioModal from "./AddPortfolioModal";
import { useState, useEffect } from "react";
import useWatchlistAPI from "../services/useWatchlistAPI";
import { FaPlus } from "react-icons/fa";

//Portfolio graph.
export function PortfolioGraph() {
  const { portfolio, isLoading, isError, refetch } =
    useWatchlistAPI("my-watchlist");
  const [isAddPortfolioModalOpen, setAddPortfolioModalOpen] = useState(false);
  return (
    <div
      id="portfolio-graph"
      className="rounded-xl shadow-lg shadow-accent/20  h-96 w-full  bg-gradient-to-b from-darker-teal to-black"
    >
      <div className="p-4 md:p-8">
        <div className="flex justify-between">
          <div className="font-bold text-base">
            My Portfolio{" "}
            <div className="space-x-2 dropdown dropdown-bottom dropdown-end">
              <button
                tabIndex={0}
                className="btn btn-circle btn-sm btn-primary"
              >
                <FaPlus />
              </button>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a onClick={() => setAddPortfolioModalOpen(true)}>
                    {" "}
                    Add New Portfolio +{" "}
                  </a>
                </li>
                <li>
                  <a>Edit Symbols</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="tabs">
            <a className="tab">1D</a>
            <a className="tab">1W</a>
            <a className="tab">1M</a>
            <a className="tab">3M</a>
            <a className="tab tab-active">1Y</a>
            <a className="tab">5Y</a>
          </div>
        </div>

        <AddPortfolioModal
          isOpen={isAddPortfolioModalOpen}
          onClose={() => setAddPortfolioModalOpen(false)}
          refetch={refetch}
        />
        <MyPortfolioChartEmpty />
      </div>
    </div>
  );
}
