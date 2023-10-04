import {TrendingPortfolios} from "../components/TrendingPortfolios";
import {SearchSymbols} from "../components/SearchSymbols";

export default function HomePage() {


    return (
        <section className="pt-32 bg-[url('../public/assets/bg1.png')] min-h-screen">
            <div className='flex flex-col items-center space-y-20 pb-16'>
                <div className='pt-16'>
                    <div className='text-3xl lg:text-4xl font-bold text-center'>StocXTune - Your #1 Stock Management and research tool
                        Tool
                    </div>
                    <div className='mt-4 text-xl lg:text-2xl font-light text-center'>Track and manage your stocks on StocXtune
                    </div>
                </div>

                <SearchSymbols/>

                <TrendingPortfolios title="Top Trending Gainers" url="co/collections/day_gainers?start=0"/>
                <TrendingPortfolios title="Top Trending Losers" url="co/collections/day_losers?start=0"/>
                <TrendingPortfolios title="Most Active Stocks" url="co/collections/most_actives?start=0"/>



            </div>
        </section>
    )
}
