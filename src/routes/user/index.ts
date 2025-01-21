import { FastifyInstance } from "fastify";

import { userController } from "../../factory/user/factoryUserController";




export const userRoutes = (app:FastifyInstance) => {
const controller = userController()

app.post('/register',controller.registerUser)
app.post('/login', controller.loginUser)
}