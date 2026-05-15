import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const uri = process.env.TILES_DB_URI ;
const client = new MongoClient(uri);

const db = client.db('tiles-gallery-auth-db');
export const auth = betterAuth({
    emailAndPassword: { 
    enabled: true, 
  }, 
  database: mongodbAdapter(db, {
    client,
  }),
});