import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import NumberFormat from 'react-number-format';
import useFetch from "../services/useFetch";
import {useNavigate} from 'react-router-dom';

function renderTableRow(data, navigate) {
    function navigateToDetails() {
        navigate('/stock/' + data.symbol)
    }

    return (
        <tr onClick={() => navigateToDetails()} className="hover:bg-primary cursor-pointer" key={data.symbol}>
            <td className='bg-transparent text-accent'>{data.symbol}</td>
            <td className='bg-transparent'>{data.companyName}</td>
            <td className={'bg-transparent text-neutral'}><NumberFormat value={data.previousClose} displayType={'text'}
                                                                        thousandSeparator={true} prefix={'$'}/></td>
            <td className='bg-transparent text-info'>
                <NumberFormat value={data.latestPrice} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
            </td>
            <td className='bg-transparent text-neutral'>{data.latestVolume}</td>
            <td className='bg-transparent'><NumberFormat value={data.open} displayType={'text'}
                                                         thousandSeparator={true}
                                                         prefix={'$'}/></td>
            <td className='bg-transparent'><NumberFormat value={data.close} displayType={'text'}
                                                         thousandSeparator={true} prefix={'$'}/></td>
            <td className={data.changePercent > 0 ? 'bg-transparent text-green' : 'bg-transparent text-pink-red'}>{data.changePercent.toFixed(2)}</td>
        </tr>
    )
}

export function TrendingPortfolios({title, url}) {

    const navigate = useNavigate();

    const {data: gainersList, error, loading} = useFetch(url, "&displayPercent=true");

    if (error) throw  error;

    if (loading) {
        return <progress className="progress w-56"/>
    }

    return (
        <div
            className='px-8 space-y-4 mb-16 pb-8 rounded-xl shadow-lg max-w-full  overflow-x-scroll y-4 w bg-gradient-to-b from-darker-teal to-black'>
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
