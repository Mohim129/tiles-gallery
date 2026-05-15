import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const uri = process.env.TILES_DB_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);
const db = client.db('tiles-gallery-auth-db');

export const auth = betterAuth({
  emailAndPassword: { 
    enabled: true, 
  }, 
  database: mongodbAdapter(db, {
    client,
  }),
  secret: process.env.BETTER_AUTH_SECRET || "fallback-secret-for-build-only",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000"
});