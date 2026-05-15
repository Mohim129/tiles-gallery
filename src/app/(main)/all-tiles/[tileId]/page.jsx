import React from 'react';

const TileDetails = async({params}) => {
    const { tileId } = await params;
    console.log('Tile info:', tileId);
    return (
        <div>
            <h2>Tile ID: {tileId}</h2>
        </div>
    );
};

export default TileDetails;