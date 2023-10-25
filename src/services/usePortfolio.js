import axios from "axios";
import { useQuery } from "react-query";

function usePortfolioAPI(endpoint = "") {
  // Default to an empty string if no endpoint is provided

  const fetchPortfolio = async () => {
    const response = await axios.get(
      `http://localhost:8090/api/portfolios/${endpoint}`,
      {
        withCredentials: true,
      }
    );
    console.log("The Data ", response.data);
    return response.data;
  };

  // Use the endpoint in the query key
  const { data, error, isLoading, isError, refetch } = useQuery(
    ["portfolio", endpoint],
    fetchPortfolio
  );

  return {
    portfolio: data,
    error,
    isLoading,
    isError,
    refetch, // Expose the refetch method
  };
}

export default usePortfolioAPI;
