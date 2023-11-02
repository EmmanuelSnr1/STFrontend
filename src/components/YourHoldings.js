import React from "react";
import { YourHoldingsEmpty } from "../components/YourHoldingsEmpty";
import { FaPlus } from "react-icons/fa";
import AddPortfolioModal from "./AddPortfolioModal";
import { useState } from "react";
import AddTransactionModal from "./AddTransactionModal";
import { usePortfolio } from "../context/PortfolioContext"; // Import the context hook

export function YourHoldings() {
  const { selectedPortfolio, refetch } = usePortfolio(); // Use the context hook
  const [isAddTransactionModalOpen, setAddTransactionModalOpen] =
    useState(false);

  console.log("selected port", selectedPortfolio);
  return (
    <div className="md:col-span-4">
      <div
        id="portfolio-graph"
        className="rounded-xl shadow-lg shadow-accent/20  h-80 w-full  bg-gradient-to-b from-darker-teal to-black"
      >
        <div className="p-4 md:p-8">
          <div className="flex justify-between">
            <div className="font-bold text-base">
              {selectedPortfolio
                ? `${selectedPortfolio?.name}'s Holdings`
                : "Select a Portfolio"}{" "}
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
                    <a onClick={() => setAddTransactionModalOpen(true)}>
                      {" "}
                      Add Transaction{" "}
                    </a>
                  </li>
                  <li>
                    <a>View Transactions</a>
                  </li>
                  <li>
                    <a>Add Notes </a>
                  </li>
                  <li>
                    <a>View Notes </a>
                  </li>
                  <li>
                    <a>Delete</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="tabs">
              <button className=" btn btn-primary btn-sm" disabled>
                View All
              </button>
            </div>
          </div>

          <AddTransactionModal
            isOpen={isAddTransactionModalOpen}
            onClose={() => setAddTransactionModalOpen(false)}
            portfolioId={selectedPortfolio?.id}
            refetch={refetch} // Make sure your modal knows how to refetch data if needed
          />

          <YourHoldingsEmpty />
        </div>
      </div>
    </div>
  );
}
