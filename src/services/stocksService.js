const baseUrl = 'https://cloud.iexapis.com/'
const token = 'pk_d0153e3e12ee4a9f83ae3a1c3c38a8cd';

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

/*
Returns an array of symbols up to the top 10 matches.
 */
export async function searchSymbols(fragment) {
    const response = await fetch(baseUrl + "/stable/search/" + fragment + "?token=" + token)
    if (response.ok) {
        return response.json()
    }
    throw response;
}
