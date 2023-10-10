import MiniSearchBar from "./MiniSearchBar";
import { WatchlistInfo } from "./WatchlistInfo";
// Create an instance of the watchlist Component together with the mini search bar on top

export function YourWatchlist() {
  return (
    <div className="md:col-span-2">
      <div className="flex flex-col space-y-8">
        <MiniSearchBar />
        <WatchlistInfo />
      </div>
    </div>
  );
}
