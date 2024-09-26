import { Express } from "express-serve-static-core";
import userRoutes from "./user.routes";
const routes = (app: Express) => {
  userRoutes(app);
};
export default routes;
