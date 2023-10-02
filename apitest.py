import requests
import json

class YahooFinanceAPI:
    def __init__(self, api_key, api_host="yahoo-finance15.p.rapidapi.com"):
        self.base_url = "https://yahoo-finance15.p.rapidapi.com/api/yahoo/"
        self.headers = {
            "X-RapidAPI-Key": api_key,
            "X-RapidAPI-Host": api_host
        }

    def get(self, endpoint, params=None):
        """Generic GET method to fetch data from the Yahoo Finance API."""
        url = f"{self.base_url}{endpoint}"
        response = requests.get(url, headers=self.headers, params=params)
        
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Error {response.status_code}: {response.text}")
            return None

    def search(self, query):
        """Search Yahoo Finance with a given query."""
        endpoint = f"sc/search/{query}"
        return self.get(endpoint)

    def get_stock_profile(self, ticker):
        """Fetch stock profile for a given ticker."""
        endpoint = f"qu/quote/{ticker}/asset-profile"
        return self.get(endpoint)

    def get_stock_key_statistics(self, ticker):
        """Fetch key statistics for a given ticker."""
        endpoint = f"qu/quote/{ticker}/default-key-statistics"
        return self.get(endpoint)

    def get_stock_financial_data(self, ticker):
        """Fetch financial data for a given ticker."""
        endpoint = f"qu/quote/{ticker}/financial-data"
        return self.get(endpoint)

def main():
    # Ideally, store your API key securely, e.g., environment variables, secret managers, or config files.
    API_KEY = "d75e476636msha08ea07fdb84f37p11a6ccjsnf6345c38ebe8"
    
    yahoo_api = YahooFinanceAPI(api_key=API_KEY)

    ticker = "AAPL"
    # Fetching and printing stock profile
    print("\nFetching Stock Profile ...")
    response = yahoo_api.get_stock_profile(ticker)
    if response:
        print(json.dumps(response, indent=4))
    
    # Fetching and printing key statistics
    print("\nFetching Stock Key Statistics ...")
    response = yahoo_api.get_stock_key_statistics(ticker)
    if response:
        print(json.dumps(response, indent=4))

    # Fetching and printing financial data
    print("\nFetching Stock Financial Data ...")
    response = yahoo_api.get_stock_financial_data(ticker)
    if response:
        print(json.dumps(response, indent=4))

if __name__ == '__main__':
    main()
