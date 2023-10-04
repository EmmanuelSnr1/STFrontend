import { useState, useEffect } from 'react';

const BASE_URL = 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote';

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
                        "X-RapidAPI-Key": "d75e476636msha08ea07fdb84f37p11a6ccjsnf6345c38ebe8",
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
    return useFetch(`/${symbol}/asset-profile`);
}

// Custom hook for Institution Ownership
function useFetchInstitutionOwnership(symbol) {
    return useFetch(`/${symbol}/institution-ownership`);
}

function useFetchSECFilings(symbol) {
    return useFetch(`/${symbol}/sec-filings`);
}

function useFetchInsiderHoldings(symbol) {
    return useFetch(`/${symbol}/insider-holders`);
}

function useFetchKeyFinancials(symbol) {
    return useFetch(`/${symbol}/financial-data`);
}


export { 
    useFetch, 
    useFetchCompanyProfile, 
    useFetchInstitutionOwnership,
    useFetchSECFilings,
    useFetchInsiderHoldings,
    useFetchKeyFinancials
};
