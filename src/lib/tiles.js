import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'db.json');

export async function getTiles() {
  try {
    const data = await fs.readFile(DB_PATH, 'utf8');
    return JSON.parse(data).tiles;
  } catch (error) {
    console.error('Error reading tiles from db.json:', error);
    return [];
  }
}

export async function getTileById(id) {
  const tiles = await getTiles();
  return tiles.find((tile) => tile.id === id) || null;
}

export async function getFeaturedTiles() {
  const ids = ["tile_005", "tile_010", "tile_015", "tile_020"];
  const tiles = await getTiles();
  return tiles.filter((tile) => ids.includes(tile.id));
}
