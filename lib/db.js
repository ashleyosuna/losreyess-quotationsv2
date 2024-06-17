// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.MONGODB_URI as string;
// const options = {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// };

// let client;
// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   let globalWithMongo = global as typeof globalThis & {
//     _mongoClientPromise?: Promise<MongoClient>;
//   };

//   if (!globalWithMongo._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     globalWithMongo._mongoClientPromise = client.connect();
//   }
//   clientPromise = globalWithMongo._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise;

import mongoose from "mongoose";

// const url = process.env?.MONGODB_URI;
// let connection;

// const connect = async () => {
//   if (!connection) {
//     connection = await mongoose.connect(url);
//     console.log("Connected to Database");
//   }
//   return connection;
// };

// export default connect;

const connect = async () => {
  try {
    console.log("in connect, mongouri is ", process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};

export default connect;
