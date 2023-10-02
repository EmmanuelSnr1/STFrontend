// apiConfig.js

export const API_CONFIG = {
    BASE_URL_YFINANCE: 'https://yfinance-stock-market-data.p.rapidapi.com',
    BASE_URL_YAHOO: 'https://yahoo-finance15.p.rapidapi.com',
    RAPIDAPI_KEY: 'd75e476636msha08ea07fdb84f37p11a6ccjsnf6345c38ebe8',
    getHeaders(host) {
        return {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': this.RAPIDAPI_KEY,
            'X-RapidAPI-Host': host
        };
    }
};
