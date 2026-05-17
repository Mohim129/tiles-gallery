
import { getFeaturedTiles } from "@/lib/tiles";

import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FeaturedTilesClient from "./FeaturedTilesClient";
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
          <FeaturedTilesClient tiles={tiles} />
        )}
        <div className="text-center mt-10">
          <Link
            href="/all-tiles"
            className="btn btn-outline btn-primary btn-wide"
          >
            View All Tiles
            
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTiles;