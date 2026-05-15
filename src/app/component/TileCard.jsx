// components/TileCard.jsx
import Link from "next/link";
import Image from "next/image";

export default function TileCard({ tile }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <figure className="relative w-full h-48 overflow-hidden">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </figure>
      <div className="card-body items-center text-center p-5">
        <h3 className="card-title text-base-content text-lg">{tile.title}</h3>
        <p className="text-sm text-base-content/70">
          {tile.dimensions} · {tile.material}
        </p>
        <p className="text-xl font-bold text-primary mt-2">
          ${tile.price}
          <span className="text-sm font-normal text-base-content/50 ml-1">
            {tile.currency}
          </span>
        </p>
        <div
          className={`badge ${tile.inStock ? "badge-success" : "badge-error"} gap-1`}
        >
          {tile.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <div className="card-actions mt-3">
          <Link
            href={`/all-tiles/${tile.id}`}
            className="btn btn-primary btn-sm hover:btn-wide transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
