import { PortfolioGraph } from "./PortfolioGraph";
import { WatchlistInfo } from "./WatchlistInfo";

export function AnalyticsCanvas() {
  return (
    <div className="md:col-span-4 space-y-14">
      <PortfolioGraph />
    </div>
  );
}
