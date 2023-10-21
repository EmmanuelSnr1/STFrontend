import { HoldingsTotal } from "../components/HoldingsTotal";
import { YourWatchlist } from "../components/YourWatchlist";
import { AnalyticsCanvas } from "../components/AnalyticsCanvas";
import { WatchlistInfo } from "../components/WatchlistInfo";
import { Watchlist } from "../components/Watchlist";
import { NewsFeed } from "../components/NewsFeed";

export default function AnalyticsPage() {
  return (
    <section className="pt-20 bg-[url('../public/assets/bg1.png')] min-h-screen ">
      <div className="flex flex-col py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-6 gap-12">
            <AnalyticsCanvas />
            <Watchlist spanSize="md:col-span-2" />
            <Watchlist spanSize="md:col-span-3" />
            <Watchlist spanSize="md:col-span-2" />
            <Watchlist spanSize="md:col-span-1" />
            <NewsFeed />
          </div>
        </div>
      </div>
    </section>
  );
}
