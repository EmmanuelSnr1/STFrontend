import React, { createContext, useState, useContext, useMemo } from "react";
import usePortfolioAPI from "../services/usePortfolioAPI";

const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const {
    data: portfolios,
    isLoading,
    isError,
    refetch,
  } = usePortfolioAPI("my-portfolio");

  const selectPortfolio = (portfolioId) => {
    // If portfolios are not yet loaded, we can't select one
    if (!portfolios) return;

    const selected = portfolios.find((p) => p.id === portfolioId);
    setSelectedPortfolio(selected);
  };

  // Ensuring that the context value is memoized so it doesn't cause unnecessary re-renders
  const value = useMemo(
    () => ({
      selectedPortfolio,
      portfolios,
      isLoading,
      isError,
      selectPortfolio,
      refetch,
    }),
    [selectedPortfolio, portfolios, isLoading, isError]
  );

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};