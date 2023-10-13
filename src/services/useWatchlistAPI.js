import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

function useWatchlistAPI(endpoint = "") {
  // Default to an empty string if no endpoint is provided

  const fetchWatchlist = async () => {
    const response = await axios.get(
      `http://localhost:8090/api/watchlist/${endpoint}`,
      {
        withCredentials: true,
      }
    );
    console.log("The Data ", response.data);
    return response.data;
  };

  // Use the endpoint in the query key
  const { data, error, isLoading, isError } = useQuery(
    ["watchlist", endpoint],
    fetchWatchlist
  );

  return {
    watchlist: data,
    error,
    isLoading,
    isError,
  };
}

export default useWatchlistAPI;
