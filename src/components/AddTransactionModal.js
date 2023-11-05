import React, { useState } from "react";
import axios from "axios";

function AddTransactionModal({ isOpen, onClose, refetch, portfolioId }) {
  const [assetType, setAssetType] = useState("SECURITY");
  const [transactionType, setTransactionType] = useState("CREDIT");
  const [symbol, setSymbol] = useState("");
  const [date, setDate] = useState("");
  const [shares, setShares] = useState("");
  const [price, setPrice] = useState("");
  const [fees, setFees] = useState("");
  const [accountInfo, setAccountInfo] = useState("");
  const [currency, setCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const handleSave = async () => {
    const payload = {
      assetType: assetType,
      transactionType: transactionType,
      symbol: symbol,
      date: date,
      shares: shares,
      price: price,
      fees: fees,
      accountInfo: accountInfo,
      // Add other fields as needed...
    };
    console.log("The payload ", payload);

    try {
      await axios.post(
        `http://localhost:8090/api/portfolios/${portfolioId}/transactions`,
        [payload],
        {
          withCredentials: true,
        }
      );
      console.log("Transaction Added Successfly. ");
      onClose();
      refetch();
    } catch (error) {
      console.error("Error creating transaction:", error);
    }
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
        <h3 className="font-bold text-lg">Add Transaction</h3>
        <br />

        <div className="form-control">
          <label className="label">
            <span className="label-text">Asset Type</span>
          </label>
          <select
            className="select select-bordered"
            value={assetType}
            onChange={(e) => setAssetType(e.target.value)}
          >
            <option value="SECURITY">SECURITY</option>
            <option value="CASH">CASH</option>
          </select>
        </div>

        {assetType === "SECURITY" && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Symbol</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                placeholder="Enter stock symbol (e.g., AAPL)"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Transaction Type</span>
              </label>
              <select
                className="select select-bordered"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="BUY_LONG">BUY LONG</option>
                <option value="SELL_LONG">SELL LONG</option>
                <option value="SELL_SHORT">SELL SHORT</option>
                <option value="BUY_SHORT">BUY SHORT</option>
                <option value="DEPOSIT">DEPOSIT</option>
                <option value="BUY">BUY</option>
                <option value="SELL">SELL</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Shares</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                value={shares}
                onChange={(e) => setShares(e.target.value)}
                placeholder="Enter number of shares"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Fees</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                placeholder="Enter Fees"
              />
            </div>
            {/* ... other SECURITY-specific fields ... */}
          </>
        )}

        {assetType === "CASH" && (
          <>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Account Info</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                value={accountInfo}
                onChange={(e) => setAccountInfo(e.target.value)}
                placeholder="Enter account name/description"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Transaction Type</span>
              </label>
              <select
                className="select select-bordered"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="OPEN">OPEN</option>
                <option value="CREDIT">CREDIT</option>
                <option value="DEBIT">DEBIT</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Amount</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Amount"
              />
            </div>
            {/* ... other CASH-specific fields ... */}
          </>
        )}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="date"
            className="input input-bordered"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {/* ... other common fields ... */}

        <div className="modal-action">
          <button className="btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default AddTransactionModal;
