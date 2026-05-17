
import { auth } from '@/lib/auth';
import { getTileById } from '@/lib/tiles';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TileDetails = async({ params }) => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-4">
        <h1 className="text-2xl font-bold">You are not logged in</h1>
        <h4>
          Click Here to{" "}
          <Link href="/signin" className="text-blue-400">
            Login
          </Link>
        </h4>
      </div>
    );
  }

    const { tileId } = await params;
    console.log("Tile info:", tileId);

    const tilePromise = getTileById(tileId);
    const tile = await tilePromise;
    console.log("Tile details:", tile);

    return (
      <div>
        <div className="min-h-screen bg-base-100 py-10 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="relative w-full lg:w-1/2 h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={tile.image}
                  alt={tile.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
                <h1 className="text-4xl font-extrabold text-[#6d4fc9]">
                  {tile.title}
                </h1>

                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-base-content">
                    ${tile.price}{" "}
                    <span className="text-lg font-normal">{tile.currency}</span>
                  </span>
                  <span
                    className={`badge ${tile.inStock ? "badge-success" : "badge-error"} badge-lg`}
                  >
                    {tile.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <p className="text-base-content/80">
                  <span className="font-semibold">Creator:</span> Tiles Gallery
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-1">Description</h3>
                  <p className="text-base-content/70 leading-relaxed">
                    {tile.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Dimensions</h4>
                    <p className="text-base-content/70">{tile.dimensions}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Material</h4>
                    <p className="text-base-content/70">{tile.material}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {tile.tags.map((tag) => (
                      <span
                        key={tag}
                        className="badge badge-outline text-[#6d4fc9]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/all-tiles"
                  className="btn btn-outline bg-[#6d4fc9] text-white mt-4"
                >
                  ← Back to Gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TileDetails;