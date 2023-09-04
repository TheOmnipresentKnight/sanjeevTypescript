import { Express, Request, Response, Router } from "express";
import Sample2Controller from "../controllers/sample2.controller";
import { Routes } from "../interfaces/routes.interface";

class Sample2Router implements Routes {
  public path = "";
  public router = Router();
  public sampleController = new Sample2Controller();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get("/sample2", this.sampleController.sampleTwoController);
  }
}
export default Sample2Router;
