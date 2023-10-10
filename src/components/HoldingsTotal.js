import { PortfolioSummary } from "./PortfolioSummary";
import { PortfolioGraph } from "./PortfolioGraph";

export function HoldingsTotal() {
  return (
    <div className="md:col-span-4 space-y-14">
      <PortfolioSummary />
      <PortfolioGraph />
    </div>
  );
}
