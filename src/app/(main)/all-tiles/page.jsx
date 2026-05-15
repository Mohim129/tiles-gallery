import { getTiles } from '@/lib/tiles';
import TileCard from '@/app/component/TileCard';
import React from 'react';


const AllTiles = async() => {
    const tiles = await getTiles();
    console.log(tiles);
    return (
        <div>
            <h1>All tiles:{tiles.length} </h1>
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
        </div>
    );
};

export default AllTiles;<h1>All tiles</h1>