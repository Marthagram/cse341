import { getDB } from "./connect.js";
import { ObjectId } from 'mongodb';
 


export async function getAllUsers() {
    
    const db = getDB();

    const contacts = await db
        .collection("contacts")
        .find({})
        .toArray();

    return contacts;
}

export async function getUserById(id) {
  
    const db = getDB();
    const user = await db.collection("contacts").findOne({ _id: new ObjectId (id) });
    return user;
}
    