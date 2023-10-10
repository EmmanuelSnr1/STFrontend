import { MyPortfolioChartEmpty } from "../components/MyPortfolioChartEmpty";

export function PortfolioGraph() {
  return (
    <div
      id="portfolio-graph"
      className="rounded-xl shadow-lg shadow-accent/20  h-96 w-full  bg-gradient-to-b from-darker-teal to-black"
    >
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

        <MyPortfolioChartEmpty />
      </div>
    </div>
  );
}
