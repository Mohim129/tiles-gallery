import { getFeaturedTiles } from "@/lib/tiles";
import TileCard from "./TileCard";

// The getFeaturedTiles function is now imported from @/lib/tiles


const FeaturedTiles = async () => {
     const tiles = await getFeaturedTiles();
    console.log(tiles);
  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-base-content mb-4">
            Featured Tiles
          </h2>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Discover our handpicked selection of premium tiles. Each piece is
            chosen for its exceptional quality and unique design.
          </p>
        </div>
        {tiles.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-block">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
            <p className="mt-4 text-base-content/70">
              Loading featured tiles...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiles.map((tile) => (
              <TileCard key={tile.id} tile={tile} />
            ))}
          </div>
        )}
        <div className="text-center mt-10">
          <a href="/all-tiles" className="btn btn-outline btn-primary btn-wide">
            View All Tiles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTiles;