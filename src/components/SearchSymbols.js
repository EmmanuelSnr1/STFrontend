import {useEffect, useState} from "react";
import {searchSymbols} from "../services/stocksService";
import {HiOutlineLightBulb} from "react-icons/hi";
import {FaSearch} from "react-icons/fa";
import {useNavigate} from 'react-router-dom';


export function SearchSymbols() {
    const [symbol, setSymbol] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    const [suggestions, setSuggestions] = useState([])

    const history = useNavigate()


    function search() {
        setSymbol(symbol)
    }

    function navigate(symbol) {
        history('/stock/' + symbol)
    }


    useEffect(() => {
        async function searchCompanyWithSymbol(s) {
            if (!s) {
                setSuggestions([])
                return;
            }

            try {
                const response = await searchSymbols(s)
                setSuggestions(response.slice(0, 10))
                console.log(suggestions)
            } catch (e) {
                setError(e)
                console.log(e)
            } finally {
                setLoading(false)
                // console.log('effect run')
            }
        }

        searchCompanyWithSymbol(symbol)


    }, [symbol])


    return (
        <div>
            <div className='flex items-center justify-center'>
                <input onKeyUp={(e) => setSymbol(e.target["value"])}
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
                    <div className="py-2 flex items-center"><HiOutlineLightBulb/> Top matching results
                    </div>
                )}
                {suggestions && suggestions.map(s => (
                    <button onClick={() => navigate(s.symbol)} key={s.cik + s.symbol}
                            className="btn btn-accent btn-sm">{s.symbol}</button>
                ))}
            </div>

            {error && (
                <div>Some error occurred: {error.status}</div>
            )}
        </div>
    )
}
