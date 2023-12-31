import { NewsFeedEmpty } from "../components/NewsFeedEmpty";
import { FaEllipsisH } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import useStockAPI from "../services/useStockAPI"; // Make sure to adjust the path to your hook

export function NewsFeed() {
  const { data: newsData, error, loading } = useStockAPI("/market-news");

  const newsArray = newsData?.body || [];

  console.log("The news Array ", newsArray);
  return (
    <div className="md:col-span-2">
      <div className="flex flex-col">
        <div className="px-8 space-y-4 mb-16 pb-8 rounded-xl shadow-lg shadow-accent/20 max-w-full h-96 overflow-x-hidden y-4 bg-gradient-to-b from-darker-teal to-black">
          <div className="flex justify-between pt-8">
            <div className="font-bold text-base">News Feed</div>
            <div className="space-x-2">
              <button className="btn btn-circle btn-sm btn-primary">
                <FaEllipsisH />
              </button>
            </div>
          </div>

          {newsArray?.length === 0 ? (
            <NewsFeedEmpty />
          ) : (
            newsArray?.slice(1, 20).map((newsItem) => (
              <a
                key={newsItem?.guid}
                href={newsItem?.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card bg-gradient-to-b from-black to-dark-teal lg:card-side bg-base-100 shadow-xl mb-4"
              >
                <figure className="pl-2">
                  <img
                    src="https://awlights.com/wp-content/uploads/sites/31/2017/05/placeholder-news.jpg"
                    alt="News Thumbnail"
                    className="w-24 h-24 object-cover"
                  />
                </figure>
                <div className="card-body pl-2 p-2">
                  <p className="text-xs text-green">
                    {new Date(newsItem?.pubDate).toLocaleDateString()}
                  </p>
                  <h2 className="card-title text-accent text-xs">
                    {newsItem?.title}
                  </h2>
                  <p className="text-xs">{newsItem?.source}</p>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
