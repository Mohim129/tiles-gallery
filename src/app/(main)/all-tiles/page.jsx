
"use client";

import { useEffect, useState } from "react";
import { Input, InputGroup, Button, Form } from "@heroui/react";
import { Magnifier } from "@gravity-ui/icons";
import TileCard from "@/app/component/TileCard";

const AllTiles = () => {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedTerm, setSubmittedTerm] = useState("");

  useEffect(() => {
    async function fetchTiles() {
      try {
        const res = await fetch("/api/tiles");
        const data = await res.json();
        setTiles(data);
      } catch (error) {
        console.error("Failed to fetch tiles:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTiles();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmittedTerm(searchTerm.trim());
  };

  const filteredTiles = submittedTerm
    ? tiles.filter((tile) =>
        tile.title.toLowerCase().includes(submittedTerm.toLowerCase()),
      )
    : tiles;

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-10 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          All Tiles ({filteredTiles.length})
        </h1>
        <Form className="w-full max-w-2xl mx-auto mb-8" onSubmit={handleSearch}>
          <div className="flex gap-2">
            <InputGroup className="flex-1">
              <InputGroup.Prefix>
                <Magnifier className="text-default-400 text-xl" />
              </InputGroup.Prefix>
              <InputGroup.Input
                size="lg"
                placeholder="Search tiles by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="text-lg"
              />
            </InputGroup>
            <Button type="submit" color="primary" size="lg">
              Search
            </Button>
          </div>
        </Form>

        {filteredTiles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-base-content/70">No tiles match your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredTiles.map((tile) => (
              <TileCard key={tile.id} tile={tile} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTiles;
