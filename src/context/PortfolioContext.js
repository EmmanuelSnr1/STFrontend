import React, { createContext, useState, useContext } from "react";
import usePortfolioAPI from "../services/usePortfolioAPI";

const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [currentPortfolio, setCurrentPortfolio] = useState(null);
  const { portfolio, isLoading, isError, refetch } =
    usePortfolioAPI("my-portfolio");
  const selectPortfolio = (portfolioId) => {
    // Fetch and set the current portfolio based on the selected ID
    portfolioId = portfolio?.id || null;
  };

  const value = {
    currentPortfolio,
    selectPortfolio,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
