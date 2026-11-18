import { Elysia } from "elysia";
import { healthRoutes } from "./routes/health";

const port = Number(process.env.PORT) || 3000;

const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to ElysiaJS + Drizzle ORM + MySQL API",
    status: "running",
  }))
  .use(healthRoutes)
  .listen(port);

console.log(`🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`);

export type App = typeof app;
