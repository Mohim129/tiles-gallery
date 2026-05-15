import FeaturedTiles from "../component/FeaturedTiles";
import HeroBanner from "../component/HeroBanner";
import NewMarquee from "../component/NewMarquee";


export default function Home() {
  return (
    <div className="">
      <HeroBanner></HeroBanner>
      <NewMarquee></NewMarquee>
      <FeaturedTiles></FeaturedTiles>
    </div>
  );
}
