import { WatchlistInfo } from "../components/WatchlistInfo";

// Create an instance of the watchlist property and set it to a particular size

export function Watchlist(props) {
  const { spanSize = "md:col-span-2" } = props; // Default value is "md:col-span-2" if not provided

  return (
    <div className={spanSize}>
      <div className="flex flex-col space-y-8">
        <WatchlistInfo />
      </div>
    </div>
  );
}
