
import { pgTable, serial, text } from "drizzle-orm/pg-core";



export const user = pgTable('user', {
    id:text('id').primaryKey(),
    name:text('name').notNull(),
    email:text('email').unique().notNull(),
    password:text('password').notNull()
})