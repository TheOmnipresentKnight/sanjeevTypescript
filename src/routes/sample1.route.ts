import { Express, Request, Response, Router } from "express";
import Sample1Controller from "../controllers/sample1.controller";
import { Routes } from "../interfaces/routes.interface";

class Sample1Router implements Routes {
  public path = "";
  public router = Router();
  public sampleController = new Sample1Controller();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get("/sample1", this.sampleController.sampleOneController);
  }
}
export default Sample1Router;
