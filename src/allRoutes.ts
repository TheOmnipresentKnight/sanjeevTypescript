import { Routes } from "./interfaces/routes.interface";
import SampleRouter1 from "./routes/sample1.route";
import SampleRouter2 from "./routes/sample2.route";
import UsersRouter from "./routes/users.route";
const allRoutes: Routes[] = [];

allRoutes.push(new SampleRouter1());
allRoutes.push(new SampleRouter2());
allRoutes.push(new UsersRouter());

export default allRoutes;
