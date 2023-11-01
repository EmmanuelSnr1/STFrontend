import { HoldingsTotal } from "../components/HoldingsTotal";
import { YourWatchlist } from "../components/YourWatchlist";
import { YourHoldings } from "../components/YourHoldings";
import { NewsFeed } from "../components/NewsFeed";
import { PortfolioProvider } from "../context/PortfolioContext";

export default function MyPortfolioPage() {
  const primaryXAxis = {
    valueType: "DateTime",
    majorGridLines: { width: 0 },
    majorTickLines: { color: "transparent" },
  };

  const primaryYAxis = {
    labelFormat: "n0",
    lineStyle: { width: 0 },
    rangePadding: "None",
    majorTickLines: { width: 0 },
  };

  const crosshair = { enable: true };
  const tooltip = { enable: true };

  return (
    <section className="pt-20 bg-[url('../public/assets/bg1.png')] min-h-screen ">
      <div className="flex flex-col py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-6 gap-12">
            <PortfolioProvider>
              <HoldingsTotal />
            </PortfolioProvider>
            <YourWatchlist />
            <YourHoldings />
            <NewsFeed />
          </div>
        </div>
      </div>
    </section>
  );
}
