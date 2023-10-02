import { useEffect, useState } from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const baseUrl = 'https://yahoo-finance15.p.rapidapi.com/api/yahoo/sc/search/';
const headers = {
    'X-RapidAPI-Key': 'd75e476636msha08ea07fdb84f37p11a6ccjsnf6345c38ebe8',
    'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
};

export async function searchSymbols(fragment) {
    const response = await fetch(baseUrl + fragment, {
        method: 'GET',
        headers: headers
    });
    if (response.ok) {
        const json = await response.json();
        return json.body;
    }
    throw response;
}

export function SearchSymbols() {
    const [symbol, setSymbol] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [suggestions, setSuggestions] = useState([]);

    const history = useNavigate();

    function search() {
        setSymbol(symbol);
    }

    function navigate(symbol) {
        history('/stock/' + symbol);
    }

    useEffect(() => {
        async function searchCompanyWithSymbol(s) {
            if (!s) {
                setSuggestions([]);
                return;
            }
            try {
                const response = await searchSymbols(s);
                setSuggestions(response.slice(0, 10));
            } catch (e) {
                setError(e);
            } finally {
                setLoading(false);
            }
        }

        searchCompanyWithSymbol(symbol);

    }, [symbol]);

    return (
        <div>
            <div className='flex items-center justify-center'>
                <input onKeyUp={(e) => setSymbol(e.target.value)}
                       className=' mr-2 h-16 uppercase text-lg bg-lighter-teal/20 input w-72 lg:w-96 placeholder:capitalize placeholder:text-neutral/50'
                       placeholder='Search Stock Portfolios' type="search" aria-autocomplete="list"/>
                <button onClick={() => search()} className="btn btn-primary btn-lg">
                    <span className="hidden md:block">Search</span>
                    <FaSearch className="md:hidden"/>
                </button>
            </div>

            <div className="py-4 px-4 space-x-2 space-y-2 max-w-xl">
                {symbol && loading && (<div>Loading suggestions...</div>)}
                {suggestions.length > 0 && (
                    <div className="py-2 flex items-center"><HiOutlineLightBulb/> Top matching results</div>
                )}
                {suggestions && suggestions.map(s => (
                    <button onClick={() => navigate(s.symbol)} key={s.symbol}
                            className="btn btn-accent btn-sm">{s.symbol}</button>
                ))}
            </div>

            {error && (
                <div>Some error occurred: {error.status}</div>
            )}
        </div>
    );
}
