import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import NumberFormat from 'react-number-format';
import useFetch from "../services/useFetch";
import {useNavigate} from 'react-router-dom';
// import React from 'react';


// This component sources data from other parts of the API and implements them in other parts of the code. 

// Helper Function: renderTableRow
// This function is used to render a single row in a table, based on the data passed into it:

// It takes two parameters: the data for the row (which includes stock information) and a navigate function.
// The navigateToDetails function inside it navigates the user to a detailed view of a particular stock when a table row is clicked.
// It then returns a JSX representation of a table row (<tr>) where each table cell (<td>) represents a piece of stock data, like the stock's symbol, company name, previous close price, etc.
// The NumberFormat component is used to display monetary values with a $ prefix and comma as the thousand separator.
// The last cell changes its text color based on whether the stock's percentage change (changePercent) is positive or negative.
// Main Component: TrendingPortfolios
// This is the primary component:

// Props: This component accepts two props: title (a string) and url (the endpoint to fetch stock data).

// Fetching Data: The component uses the custom useFetch hook to fetch stock data from the provided url. This hook returns the data, any errors, and a loading state.

// Loading and Error States:

// If there's an error, the component throws it.
// If the data is still being loaded, a progress bar is displayed.
// Returned JSX:

// The component returns a div element that contains:
// A title.
// Left and right navigation buttons (currently hidden).
// A table with headers for stock details.
// The body of the table (<tbody>) was meant to map over the gainersList data and render rows using the renderTableRow helper function. However, this mapping is commented out in the code you provided ({/* {gainersList.map(symbol => renderTableRow(symbol, navigate))} */}), so no data is currently being displayed in the table.
// The styles and classes used (like btn, btn-circle, btn-sm, etc.) suggest that the app likely uses a utility-first CSS framework like Tailwind CSS.

function renderTableRow(data, navigate) {
    function navigateToDetails() {
        navigate('/stock/' + data.symbol)
    }

    return (
        <tr onClick={() => navigateToDetails()} className="hover:bg-primary cursor-pointer" key={data.symbol}>
            <td className='bg-transparent text-accent'>{data.symbol}</td>
            <td className='bg-transparent'>{data.shortName}</td>
            <td className={'bg-transparent text-neutral'}>
                <NumberFormat value={data.regularMarketPreviousClose} displayType={'text'}
                              thousandSeparator={true} prefix={'$'}/>
            </td>
            <td className='bg-transparent text-info'>
                <NumberFormat value={data.regularMarketPrice} displayType={'text'} 
                              thousandSeparator={true} prefix={'$'}/>
            </td>
            <td className='bg-transparent text-neutral'>{data.regularMarketVolume}</td>
            <td className='bg-transparent'>
                <NumberFormat value={data.regularMarketOpen} displayType={'text'}
                              thousandSeparator={true} prefix={'$'}/>
            </td>
            <td className='bg-transparent'> 
                <NumberFormat value={data.postMarketPrice} displayType={'text'}
                              thousandSeparator={true} prefix={'$'}/>
            </td>
            <td className={data.regularMarketChangePercent > 0 
                            ? 'bg-transparent text-green' 
                            : 'bg-transparent text-pink-red'}>
                {data.regularMarketChangePercent.toFixed(2)}
            </td>
        </tr>
    )
}

export function TrendingPortfolios({title, url}) {
    const navigate = useNavigate();

    const {data: response, error, loading} = useFetch(url);

    // Accessing the quotes key from the response
    const gainersList = response?.quotes || [];

    if (error) throw error;

    if (loading) {
        return <progress className="progress w-56"/>
    }

    return (
        <div className='px-8 space-y-4 mb-16 pb-8 rounded-xl shadow-lg max-w-full overflow-x-scroll y-4 w bg-gradient-to-b from-darker-teal to-black'>
            <div className='flex justify-between pt-8'>
                <div className='font-bold text-base'>{title}</div>
                <div className='space-x-2 hidden'>
                    <button className='btn btn-circle btn-sm btn-primary'>
                        <FaChevronLeft/>
                    </button>
                    <button className='btn btn-circle btn-sm btn-primary'>
                        <FaChevronRight/>
                    </button>
                </div>
            </div>

            <table className="table table-fixed min-w-full max-w-screen-lg bg-transparent select-none ">
                <thead>
                <tr className=''>
                    <th className='bg-transparent capitalize w-32 text-neutral/80'>Symbol</th>
                    <th className='bg-transparent capitalize w-32 text-neutral/80'>Company</th>
                    <th className='bg-transparent capitalize text-neutral/80'>Previous Close</th>
                    <th className='bg-transparent capitalize text-neutral/80'>Latest Price</th>
                    <th className='bg-transparent capitalize text-neutral/80'>Latest Volume</th>
                    <th className='bg-transparent capitalize text-neutral/80'>Open</th>
                    <th className='bg-transparent capitalize text-neutral/80 '>Close</th>
                    <th className='bg-transparent capitalize text-neutral/80'>% Gain/Loss</th>
                </tr>
                </thead>
                <tbody>
                {gainersList.map(symbol => renderTableRow(symbol, navigate))}
                </tbody>
            </table>
        </div>
    )
}
