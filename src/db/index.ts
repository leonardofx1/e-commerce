import { drizzle } from "drizzle-orm/node-postgres"


export const db = drizzle("postgres://post:123456@localhost:5432/postgres");

