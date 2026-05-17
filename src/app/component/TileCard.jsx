import Link from "next/link";
import Image from "next/image";

export default function TileCard({ tile }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <figure className="relative w-full h-24 overflow-hidden">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"

        />
      </figure>
      <div className="card-body  text-left p-2">
        <h3 className="card-title text-base-content text-lg">{tile.title}</h3>
        <p className="text-sm text-base-content/70">
          {tile.dimensions} · {tile.material}
        </p>
        <p className="text-xl font-bold text-[#6d4fc9] ">
          ${tile.price}
          <span className="text-sm font-normal text-base-content/50 ml-1">
            {tile.currency}
          </span>
        </p>
        <div
          className={`text-white badge ${tile.inStock ? "badge-success" : "badge-error"}`}
        >
          {tile.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <div className="card-actions mt-3 justify-center items-center">
          <Link
            href={`/all-tiles/${tile.id}`}
            className="btn bg-[#6d4fc9] text-white rounded-2xl btn-sm hover:btn-wide transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
