import { useQuery } from "react-query";
import axios from "axios";

const BASE_URL = "http://localhost:8090/api/symbols";

function useStockAPI(endpoint) {
  // If you want to see request headers before they're sent, uncomment the following:
  // axios.interceptors.request.use((config) => {
  //     console.log('Request Headers:', config.headers);
  //     return config;
  // }, (error) => {
  //     return Promise.reject(error);
  // });

  const fetchStockData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${endpoint}`, {
        withCredentials: true,
      });
      if (response && response.data) {
        console.log("The Data Fetched ", response.data);
        return response.data;
      } else {
        console.error("Response is undefined");
        return null;
      }
    } catch (error) {
      console.error("Error fetching stock data:", error);
      throw error; // This will ensure that the error is propagated to react-query
    }
  };

  //Caching
  // Refetch Interval:
  // If you want the data to be refetched in the background at regular intervals, you can set the refetchInterval option.
  const { data, error, isLoading, isError } = useQuery(
    ["stockData", endpoint],
    fetchStockData,
    {
      refetchInterval: 20 * 60 * 1000, // Refetch every 20 minutes
      // Stale Time:
      staleTime: 20 * 60 * 1000, // Data stays fresh for 10 minutes
      // Error Handling:
      retry: 2, // Retry 3 times before giving up
    }
  );

  return {
    data,
    error,
    isLoading,
    isError,
  };
}

export default useStockAPI;
