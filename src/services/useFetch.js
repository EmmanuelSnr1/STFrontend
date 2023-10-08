import { useState, useEffect } from 'react';

const BASE_URL = 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/';

// Base custom hook for fetching data
function useFetch(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch(`${BASE_URL}${endpoint}`, {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": "03e1e97663msh35f5cc76e6b5ce5p11427fjsn835e3d542999",
                        "X-RapidAPI-Host": "yahoo-finance15.p.rapidapi.com"
                    }
                });
                let result = await response.json();
                setData(result);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        }
        fetchData();
    }, [endpoint]);

    return { data, loading, error };
}

// Custom hook for Company Profile Data
function useFetchCompanyProfile(symbol) {
    return useFetch(`qu/quote${symbol}/asset-profile`);
}

// Custom hook for Institution Ownership
function useFetchInstitutionOwnership(symbol) {
    return useFetch(`qu/quote/${symbol}/institution-ownership`);
}

function useFetchSECFilings(symbol) {
    return useFetch(`qu/quote/${symbol}/sec-filings`);
}

function useFetchInsiderHoldings(symbol) {
    return useFetch(`qu/quote/${symbol}/insider-holders`);
}

function useFetchKeyFinancials(symbol) {
    return useFetch(`qu/quote/${symbol}/financial-data`);
}


export { 
    useFetch, 
    useFetchCompanyProfile, 
    useFetchInstitutionOwnership,
    useFetchSECFilings,
    useFetchInsiderHoldings,
    useFetchKeyFinancials
};
