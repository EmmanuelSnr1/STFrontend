const baseUrl = 'https://api.iex.cloud/v1/data/core/quote/msft?token=<your_token>'
const token = 'pk_eb688d810a8440bfb8470012290c8f79';

/*
Returns an array of quotes for the top 10 symbols in a specified list.
 */
export async function getTopSymbolsByType(listType) {
    const response = await fetch(baseUrl + "/stable/stock/market/list/" + listType + "?token=" + token + "&displayPercent=true")
    if (response.ok) {
        return response.json()
    }
    throw response;
}


/*
Get Company details by symbol
 */
export async function getCompanyDetails(symbol) {
    const response = await fetch(baseUrl + "/stable/stock/" + symbol + "/company?token=" + token)
    if (response.ok) {
        return response.json()
    }
    throw response;
}

const yahooBaseUrl = 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/';
const yahooHeaders = {
    'X-RapidAPI-Key': 'd75e476636msha08ea07fdb84f37p11a6ccjsnf6345c38ebe8',
    'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
};

/*
Returns an array of symbols up to the top 10 matches.
*/
export async function searchSymbols(fragment) {
    const response = await fetch(yahooBaseUrl + fragment, {
        method: 'GET',
        headers: yahooHeaders
    });

    if (response.ok) {
        const json = await response.json();
        return json.body; // Assuming the Yahoo API returns the data directly. You might need to adjust this to match the actual structure of the response.
    }
    throw response;
}

