
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-tight">
            Discover Your Perfect Aesthetic
          </h1>
          <p className="py-6 text-lg md:text-xl text-base-content/80">
            Explore our curated collection of premium tiles and transform your
            space.
          </p>
          <Link
            href="/all-tiles"
            className="btn btn-primary btn-lg text-lg px-10 shadow-lg hover:shadow-xl transition-all"
          >
            Browse Now
          </Link>
        </div>
      </div>
    </section>
  );
}
