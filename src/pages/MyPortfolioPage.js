import {FaEllipsisH, FaPlus} from "react-icons/fa";
import {MyPortfolioChartEmpty} from "../components/MyPortfolioChartEmpty";
import {WatchListEmpty} from "../components/WatchListEmpty";
import {YourHoldingsEmpty} from "../components/YourHoldingsEmpty";
import {NewsFeedEmpty} from "../components/NewsFeedEmpty";

export default function MyPortfolioPage() {
    const primaryXAxis = {
        valueType: 'DateTime',
        majorGridLines: {width: 0}, majorTickLines: {color: 'transparent'},
    };

    const primaryYAxis = {
        labelFormat: 'n0',
        lineStyle: {width: 0}, rangePadding: 'None',
        majorTickLines: {width: 0}
    }

    const crosshair = {enable: true};
    const tooltip = {enable: true};

    return (
        <section className="pt-20 bg-[url('../public/assets/bg1.png')] min-h-screen ">
            <div className='flex flex-col py-12'>
                <div className='container mx-auto px-4'>
                  <div className="grid md:grid-cols-6 gap-12">
                      <div className="md:col-span-4 space-y-8">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mx-4 md:mx-8">
                              <div id="portfolio-value">
                                  <div className="text-lighter-teal">Your Portfolio Value</div>
                                  <div className="font-bold text-3xl">$15,894.89</div>
                              </div>
                              <div id="todays-gain">
                                  <div className="text-lighter-teal">Today's Gain</div>
                                  <div className="text-xl text-green">+85.87(1.35%)</div>
                              </div>
                              <div id="todays-loss">
                                  <div className="text-lighter-teal">Today's Loss</div>
                                  <div className="text-xl text-pink-red">-94.68(15.23%)</div>
                              </div>
                              <div id="total-gain">
                                  <div className="text-lighter-teal">Total Gain</div>
                                  <div className="text-xl text-green">+916.39(7.78%)</div>
                              </div>
                          </div>
                          <div id="portfolio-graph"  className="rounded-xl shadow-lg shadow-accent/20  h-96 w-full  bg-gradient-to-b from-darker-teal to-black">
                              <div className="p-4 md:p-8">
                                    <div className="flex justify-between">
                                        <div className="font-bold text-base">Holdings Total</div>
                                        <div className="tabs">
                                            <a className="tab">1D</a>
                                            <a className="tab">1W</a>
                                            <a className="tab">1M</a>
                                            <a className="tab">3M</a>
                                            <a className="tab tab-active">1Y</a>
                                            <a className="tab">5Y</a>
                                        </div>
                                    </div>

                                    <MyPortfolioChartEmpty/>
                              </div>
                          </div>
                      </div>
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
                                      </div>
                                  </div>

                                  <WatchListEmpty/>

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
                      <div className="md:col-span-4">
                          <div id="portfolio-graph"  className="rounded-xl shadow-lg shadow-accent/20  h-80 w-full  bg-gradient-to-b from-darker-teal to-black">
                              <div className="p-4 md:p-8">
                                  <div className="flex justify-between">
                                      <div className="font-bold text-base">Your Holdings</div>
                                      <div className="tabs">
                                         <button className="btn btn-primary btn-sm" disabled>View All</button>
                                      </div>
                                  </div>

                                  <YourHoldingsEmpty/>
                              </div>
                          </div>
                      </div>
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
                  </div>
                </div>
            </div>
        </section>
    )
}



