/*
Provides Services for Single stocks 
*/

// const baseUrl = 'https://api.iex.cloud/v1/data/core/quote/msft?token=<your_token>'
// const token = 'pk_eb688d810a8440bfb8470012290c8f79';


// /*
// Returns an array of quotes for the top 10 symbols in a specified list.
//  */
// export async function getTopSymbolsByType(listType) {
//     const response = await fetch(baseUrl + "/stable/stock/market/list/" + listType + "?token=" + token + "&displayPercent=true")
//     if (response.ok) {
//         return response.json()
//     }
//     throw response;
// }


// /*
// Get Company details by symbol
//  */
// export async function getCompanyDetails(symbol) {
//     const response = await fetch(baseUrl + "/stable/stock/" + symbol + "/company?token=" + token)
//     if (response.ok) {
//         return response.json()
//     }
//     throw response;
// }

const backendBaseUrl = 'http://localhost:8090/api/symbols/search/';

export async function searchSymbols(fragment) {
    const response = await fetch(backendBaseUrl + fragment, {
        method: 'GET'
    });

    if (response.ok) {
        return await response.json();
    }
    throw response;
}


