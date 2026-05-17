"use client";

import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const NewMarquee = ({ tiles }) => {
  const [tileName] = useState(() => {
    if (tiles && tiles.length > 0) {
      const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
      return randomTile.title;
    }
    return "Ceramic Blue Tile";
  });

  return (
    <div className="bg-[#6d4fc9] text-primary-content py-16 shadow-inner">
      <Marquee
        pauseOnHover={true}
        speed={35}
        gradient={true}
        gradientColor="oklch(var(--p))"
        gradientWidth={80}
        className="text-base sm:text-lg font-medium tracking-wide"
      >
        <div className="flex items-center gap-6 mx-4">
          <span className="whitespace-nowrap text-4xl">
            <span className="font-bold text-4xl">New Arrivals:</span> {tileName}
          </span>
          <span className="text-primary-content/50 text-4xl">•</span>
          <span className="whitespace-nowrap text-4xl">
            <span className="font-bold text-4xl">Weekly Feature:</span> Modern
            Geometric Patterns
          </span>
          <span className="text-primary-content/50 text-4xl">•</span>
          <span className="whitespace-nowrap text-4xl">
            <span className="font-bold text-4xl">Join</span> the Community...
          </span>
        </div>
      </Marquee>
    </div>
  );
};

export default NewMarquee;
