
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section
      className="hero min-h-[70vh] relative overflow-hidden mb-16
    "
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="hero-content text-center">
        <div className="max-w-2xl text-[#b49cfd]">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
            Discover Your Perfect Aesthetic
          </h1>
          <p className="py-6 text-lg md:text-xl text-gray-200 drop-shadow">
            Explore our curated collection of premium tiles and transform your
            space.
          </p>
          <Link
            href="/all-tiles"
            className="btn text-white bg-[#6d4fc9] btn-lg text-lg px-6 shadow-lg hover:shadow-xl transition-all rounded-2xl"
          >
            Browse Now
          </Link>
        </div>
      </div>
    </section>
  );
}
