import { UserController } from "../../controllers/user/userController"
import { factoryUserRegister } from "./factoryUserRegister"


export const userController = () => {

    const register = factoryUserRegister()
    const controller = new UserController(register)
    return controller

}