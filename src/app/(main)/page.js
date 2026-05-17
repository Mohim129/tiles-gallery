import { getTiles } from "@/lib/tiles";
import FeaturedTiles from "../component/FeaturedTiles";
import HeroBanner from "../component/HeroBanner";
import NewMarquee from "../component/NewMarquee";

const Home = async () => {
  const tiles = await getTiles();

  return (
    <>
      <HeroBanner />
      <NewMarquee tiles={tiles} />
      <FeaturedTiles />
    </>
  );
};

export default Home;
