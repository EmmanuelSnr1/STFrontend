import {YourHoldingsEmpty} from "../components/YourHoldingsEmpty";

export function YourHoldings() {
        return (
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
        );
}
