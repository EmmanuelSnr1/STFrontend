import {TrendingPortfolios} from "../components/TrendingPortfolios";
import {SearchSymbols} from "../components/SearchSymbols";

export default function HomePage() {


    return (
        <section className="pt-32 bg-[url('../public/assets/bg1.png')] min-h-screen">
            <div className='flex flex-col items-center space-y-20 pb-16'>
                <div className='pt-16'>
                    <div className='text-3xl lg:text-4xl font-bold text-center'>StocXTune - Your #1 Stock Management and research
                        Tool
                    </div>
                    <div className='mt-4 text-xl lg:text-2xl font-light text-center'>Track and manage your stocks on StocXtune
                    </div>
                </div>

                <SearchSymbols/>

                <TrendingPortfolios title="Top Trending Gainers" url="/market-actives"/>
                <TrendingPortfolios title="Top Trending Losers" url="/day-losers"/>
                <TrendingPortfolios title="Most Active Stocks" url="/day-gainers"/>



            </div>
        </section>
    )
}
