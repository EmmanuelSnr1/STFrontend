import { HoldingsTotal } from "../components/HoldingsTotal";
import { YourWatchlist } from "../components/YourWatchlist";

export default function AnalyticsPage() {
  return (
    <section className="pt-20 bg-[url('../public/assets/bg1.png')] min-h-screen ">
      <div className="flex flex-col py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-6 gap-12">
            <HoldingsTotal />
            <YourWatchlist />
          </div>
        </div>
      </div>
    </section>
  );
}
