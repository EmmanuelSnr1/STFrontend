export function PortfolioSummary() {
  return (
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
  );
}
