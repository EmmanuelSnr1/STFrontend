import {MyPortfolioChartEmpty} from "../components/MyPortfolioChartEmpty";


export function HoldingsTotal() {
        return (
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
        );
}
