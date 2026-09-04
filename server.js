import express from "express";
import {connectToDatabase} from "./src/models/connect.js";
import router from './src/contacts.js';

// Define the application environment
const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || "production";

// Define the port number the server will listen on
const PORT = process.env.PORT || 3000;

const app = express();

await connectToDatabase();

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
    console.log(`Environment: ${NODE_ENV}`);
});


