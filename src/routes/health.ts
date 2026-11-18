import { Elysia } from "elysia";
import { poolConnection } from "../db";

export const healthRoutes = new Elysia({ prefix: "/health" })
  .get("/", async () => {
    let dbStatus = "disconnected";
    try {
      const connection = await poolConnection.getConnection();
      await connection.ping();
      connection.release();
      dbStatus = "connected";
    } catch {
      dbStatus = "disconnected";
    }

    return {
      status: "ok",
      uptime: process.uptime(),
      timestamp: new Date().toISOString(),
      database: dbStatus,
    };
  });
