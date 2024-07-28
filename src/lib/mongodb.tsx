// mongodb.ts

import { MongoClient, MongoClientOptions } from 'mongodb';
const database = process.env.VERCEL_ENV === 'production' ? process.env.MONGODB_URI : process.env.MONGO_LOCAL_URI;

const uri: string = database as string;
const options: MongoClientOptions = {}; // Empty options object

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!database) {
  throw new Error('Add Mongo URI to .env.local');
}

// Extend the NodeJS.Global interface to include _mongoClientPromise
declare global {
  namespace NodeJS {
    interface Global {
      _mongoClientPromise?: Promise<MongoClient>;
    }
  }
}

declare const global: NodeJS.Global;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
