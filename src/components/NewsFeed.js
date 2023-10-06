import {NewsFeedEmpty} from "../components/NewsFeedEmpty";
import {FaEllipsisH } from "react-icons/fa";
import {AiOutlineStock} from "react-icons/ai";





export function NewsFeed() {
        return (
            <div className="md:col-span-2">
                <div className='flex flex-col'>
                    <div
                        className='px-8 space-y-4 mb-16 pb-8 rounded-xl shadow-lg shadow-accent/20 max-w-full h-80 overflow-x-hidden y-4 bg-gradient-to-b from-darker-teal to-black'>
                        <div className='flex justify-between pt-8'>
                            <div className='font-bold text-base'>News Feed</div>
                            <div className='space-x-2'>
                                <button className='btn btn-circle btn-sm btn-primary'>
                                    <FaEllipsisH/>
                                </button>
                            </div>
                        </div>

                        <NewsFeedEmpty/>

                        <table className="hidden table table-fixed min-w-full max-w-screen-lg bg-transparent select-none ">
                            <thead>
                            <tr className=''>
                                <th className='bg-transparent capitalize w-32 text-neutral/80'>Company</th>
                                <th className='bg-transparent capitalize text-neutral/80'>Latest Price</th>
                                <th className='bg-transparent capitalize text-neutral/80'>Change</th>
                                {/*<th className='bg-transparent capitalize text-neutral/80'>7 Day Chart</th>*/}
                            </tr>
                            </thead>
                            <tbody>
                            {/*<div className=" flex flex-col justify-center items-center">*/}
                            {/*    <AiOutlineStock className="text-gray/90" size={120}/>*/}
                            {/*    <div className="text-xl mb-2 text-gray/90">Your portfolio is Empty</div>*/}
                            {/*    <div className=" text-gray/50">A chart showing how your portfolio is performing will be shown here</div>*/}
                            {/*</div>*/}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
}
