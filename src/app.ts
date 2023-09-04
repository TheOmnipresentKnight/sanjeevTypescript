import "reflect-metadata";
import express, { Request, Response, Application } from "express";
import { config } from "dotenv";
import SampleRouter from "./routes/sample1.route";
import { Routes } from "./interfaces/routes.interface";
import allRoutes from "./allRoutes";
import ResponseError from "./response/ResponseError";
import { connectToDatabase } from "./database"; // Import the database connection function

config({ path: ".env" });

class App {
  public app: Application;
  public port: number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.port = parseInt(process.env.PORT || "4500");

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.listen();
    this.connectToDatabase(); // Connect to the database during app initialization
  }

  private async connectToDatabase() {
    try {
      await connectToDatabase();
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(routes: Routes[]) {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Welcome to TypeScript afflikayshon!");
    });

    // Pass the database connection to the route handlers or controllers
    routes.forEach((route) => {
      this.app.use("/sanjeevApi", route.router);
    });

    this.app.use("*", function (req, res) {
      console.log("reee", req.url);
      throw new ResponseError.NotFound(
        `Sorry, HTTP resource you are looking for was not found.`
      );
    });
  }

  private listen() {
    this.app.listen(this.port, () => {
      console.log(`Sanjeev server is running on port ${this.port}`);
      console.log(`Welcome to ksnfdnfdefiejri!!!`);
    });
  }
}

const app = new App(allRoutes);
