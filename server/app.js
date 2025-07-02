import { Hono } from "@hono/hono";

import { cors } from "@hono/hono/cors";

import {logger } from "@hono/hono/logger";

import postgres from "postgres";

const sql = postgres();

const app = new Hono();

app.use("/*", cors());

app.use("/*", logger());

app.get("/", (c)=> c.json({message: "Hola mundo!"}));
app.get("/todos", async (c)=> {
  const todos = await sql`SELECT * FROM todos`;
  return c.json(todos);
})

export default app;
