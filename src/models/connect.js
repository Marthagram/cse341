import { MongoClient } from "mongodb";


const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri);
let db;

 export async function connectToDatabase() {
    try {
        await client.connect();
      
    db = client.db("cse341");
        console.log("Connected to MongoDB!");
        return client;
    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}


export function getDB() {
    return db;
}
