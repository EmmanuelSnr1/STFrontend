import React from "react";
import { YourHoldingsEmpty } from "../components/YourHoldingsEmpty";
import { FaPlus } from "react-icons/fa";
import AddPortfolioModal from "./AddPortfolioModal";
import { useState } from "react";
import AddTransactionModal from "./AddTransactionModal";
import { usePortfolio } from "../context/PortfolioContext"; // Import the context hook
import usePortfolioAPI from "../services/usePortfolioAPI";

export function YourHoldings() {
  const { selectedPortfolio, refetch } = usePortfolio(); // Use the context hook
  const [isAddTransactionModalOpen, setAddTransactionModalOpen] =
    useState(false);

  // Extract the ID from the selected portfolio
  const selectedPortfolioId = selectedPortfolio ? selectedPortfolio.id : null;

  const { portfolio, error, isLoading, isError } = usePortfolioAPI(
    `${selectedPortfolioId}/holdings`
  );

  const holdings = portfolio;
  // const [holdings, setHoldings] = useState([
  //   {
  //     id: null,
  //     stock: null,
  //     symbol: "MSFT",
  //     quantity: 15.0,
  //     averagePrice: 55554.0,
  //     cashValue: null,
  //     currentValue: 5292.15,
  //     profitLoss: -828017.85,
  //     profitLossPercentage: 9.3649242178781,
  //   },
  //   {
  //     id: null,
  //     stock: null,
  //     symbol: "TSLA",
  //     quantity: 10.0,
  //     averagePrice: 55554.0,
  //     cashValue: null,
  //     currentValue: 2199.5,
  //     profitLoss: -553340.5,
  //     profitLossPercentage: -99.6040789142096,
  //   },
  //   {
  //     id: null,
  //     stock: null,
  //     symbol: "NIO",
  //     quantity: 20.0,
  //     averagePrice: 2000.0,
  //     cashValue: null,
  //     currentValue: 164.4,
  //     profitLoss: -39835.6,
  //     profitLossPercentage: -99.589,
  //   },
  //   {
  //     id: null,
  //     stock: null,
  //     symbol: "AAPL",
  //     quantity: 20.0,
  //     averagePrice: 2000.0,
  //     cashValue: null,
  //     currentValue: 164.4,
  //     profitLoss: -39835.6,
  //     profitLossPercentage: -99.589,
  //   },
  //   {
  //     id: null,
  //     stock: null,
  //     symbol: "JXN",
  //     quantity: 20.0,
  //     averagePrice: 2000.0,
  //     cashValue: null,
  //     currentValue: 164.4,
  //     profitLoss: -39835.6,
  //     profitLossPercentage: -99.589,
  //   },
  //   {
  //     id: null,
  //     stock: null,
  //     symbol: "F",
  //     quantity: 25.0,
  //     averagePrice: 55554.0,
  //     cashValue: null,
  //     currentValue: 264.25,
  //     profitLoss: 1388585.75,
  //     profitLossPercentage: -99.98097346725709,
  //   },
  // ]);

  // Function to format numbers as currency
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  // Function to format the profit/loss percentage and value
  const formatProfitLoss = (value, percentage) => {
    const profitLossClass = value >= 0 ? "text-green" : "text-stocxtunered";
    const arrow = value >= 0 ? "↗︎" : "↘︎";
    return (
      <span className={profitLossClass}>
        {arrow} {value.toLocaleString()} ({percentage.toFixed(2)}%)
      </span>
    );
  };

  console.log("selected port", selectedPortfolio);
  console.log("selected port id  ", selectedPortfolioId);
  console.log("selected holdings ", portfolio);

  return (
    <div className="md:col-span-4">
      <div
        id="portfolio-graph"
        className="rounded-xl shadow-lg shadow-accent/20  h-96 w-full overflow-x-hidden bg-gradient-to-b from-darker-teal to-black"
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
              <button className=" btn btn-primary btn-sm">View All</button>
            </div>
          </div>

          <AddTransactionModal
            isOpen={isAddTransactionModalOpen}
            onClose={() => setAddTransactionModalOpen(false)}
            portfolioId={selectedPortfolio?.id}
            refetch={refetch} // Make sure your modal knows how to refetch data if needed
          />
          <div className="md:col-span-4">
            {/* Check if holdings array is not empty */}
            {holdings && holdings.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-3 my-2">
                {" "}
                {/* Adjust the number of columns as needed */}
                {holdings.map((holding) => (
                  <div
                    key={holding.symbol}
                    className="stats stats-vertical  bg-gradient-to-b from-darker-teal to-black lg:stats-horizontal shadow-lg shadow-accent/10"
                  >
                    <div className="stat ">
                      <div className="stat-title text-accent">Symbol</div>
                      <div className="text-lg stat-value">{holding.symbol}</div>
                      <div className="stat-desc text-info">
                        {holding.quantity} Shares
                      </div>
                    </div>
                    <div className="stat p-2">
                      <div className="stat-title">Value</div>
                      <div className="text-lg stat-value text-info">
                        $ {holding.currentValue.toLocaleString()}
                      </div>
                      <div className="stat-desc">
                        {formatProfitLoss(
                          holding.profitLoss,
                          holding.profitLossPercentage
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <YourHoldingsEmpty />
            )}

            {/* ... other parts of the component ... */}
          </div>
        </div>
      </div>
    </div>
  );
}
