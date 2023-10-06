import {WatchListEmpty} from "../components/WatchListEmpty";
import { FaPlus } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import {AiOutlineStock} from "react-icons/ai";
import useWatchlistAPI from "../services/useWatchlistAPI";




export function YourWatchlist() {
    const { watchlist, isLoading, isError } = useWatchlistAPI();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading watchlist</div>;

    return (
        <div className="md:col-span-2">
            <div className='flex flex-col space-y-8'>
                <input
                    className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
                    placeholder='Search Stock Portfolios' type="search" aria-autocomplete="list"/>
                <div
                    className='px-8 space-y-4 mb-16 pb-8 rounded-xl shadow-lg shadow-accent/20 max-w-full h-96 overflow-x-hidden y-4 bg-gradient-to-b from-darker-teal to-black'>
                    <div className='flex justify-between pt-8'>
                        <div className='font-bold text-base'>Your WatchList</div>
                        <div className='space-x-2'>
                            <button className='btn btn-circle btn-sm btn-primary'>
                                <FaPlus/>
                            </button>
                            <button className='btn btn-circle btn-sm btn-primary'>
                                <RxDropdownMenu/>
                            </button>
                        </div>
                    </div>

                    {watchlist && watchlist.length > 0 ? (
                        <table className="table table-fixed w-auto max-w-screen-lg bg-transparent select-none text-xs"> {/* Adjusted width and font size here */}
                        <thead>
                                <tr className=''>
                                    <th className='bg-transparent capitalize w-0.5/3 text-neutral/80'>Company</th>
                                    <th className='bg-transparent capitalize w-1/3 text-neutral/80'>%Gain/loss</th>
                                    <th className='bg-transparent capitalize w-1/3 text-neutral/80'>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {watchlist.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.name || "Unnamed Company"}</td>
                                        {/* Placeholder columns for %gain/loss and Price. You can replace these with actual data from your watchlist items. */}
                                        <td>{/* %gain/loss data here */}</td>
                                        <td>{/* Price data here */}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <WatchListEmpty />
                    )}
                </div>
            </div>
        </div>
    );
}



// export function YourWatchlist() {
//         return (
//             <div className="md:col-span-2">
//                 <div className='flex flex-col space-y-8'>
//                     <input
//                         className=' mr-2 h-14 uppercase text-md bg-lighter-teal/20 input w-full placeholder:capitalize placeholder:text-neutral/50'
//                         placeholder='Search Stock Portfolios' type="search" aria-autocomplete="list"/>
//                     <div
//                         className='px-8 space-y-4 mb-16 pb-8 rounded-xl shadow-lg shadow-accent/20 max-w-full h-96 overflow-x-hidden y-4 bg-gradient-to-b from-darker-teal to-black'>
//                         <div className='flex justify-between pt-8'>
//                             <div className='font-bold text-base'>Your WatchList</div>
//                             <div className='space-x-2'>
//                                 <button className='btn btn-circle btn-sm btn-primary'>
//                                     <FaPlus/>
//                                 </button>
//                                 <button className='btn btn-circle btn-sm btn-primary'>
//                                     <RxDropdownMenu/>
//                                 </button>
//                             </div>
//                         </div>

//                         {/* <WatchListEmpty/> */}

//                         <table className="table table-fixed min-w-full max-w-screen-lg bg-transparent select-none ">
//                             <thead>
//                             <tr className=''>
//                                 <th className='bg-transparent capitalize w-32 text-neutral/80'>Company</th>
//                                 <th className='bg-transparent capitalize text-neutral/80'>Latest Price</th>
//                                 <th className='bg-transparent capitalize text-neutral/80'>Change</th>
//                                 <th className='bg-transparent capitalize text-neutral/80'>7 Day Chart</th>
//                             </tr>
//                             </thead>
//                             <tbody>
//                             <div className=" flex flex-col justify-center items-center">
//                                <AiOutlineStock className="text-gray/90" size={120}/>
//                                <div className="text-xl mb-2 text-gray/90">Your portfolio is Empty</div>
//                                <div className=" text-gray/50">A chart showing how your portfolio is performing will be shown here</div>
//                             </div>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         );
//     }