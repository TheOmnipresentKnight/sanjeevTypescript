import mongoose, { Connection, ConnectOptions } from "mongoose";
import { config } from "dotenv";
config({ path: ".env" });

let dbConnection: Connection | undefined;

let dbHost = process.env.DB_HOST || `localhost`;
let dbPort: any = process.env.DB_PORT || 27017;
let dbDialect = process.env.DB_DIALECT || `mongodb`;
let dbName = process.env.DB_NAME || `sanjeev`;

export async function connectToDatabase(): Promise<Connection> {
  if (dbConnection) {
    return dbConnection;
  }

  const dbUri = `${dbDialect}://${dbHost}:${dbPort}/${dbName}`;

  const options: ConnectOptions = {}; // No need to specify useNewUrlParser and useUnifiedTopology

  try {
    await mongoose.connect(dbUri, options);

    dbConnection = mongoose.connection;

    console.log("Connected to Sanjeev's MongoDB database");
    return dbConnection;
  } catch (error) {
    throw new Error("Error connecting to MongoDB: " + error);
  }
}
