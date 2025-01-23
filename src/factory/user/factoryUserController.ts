import { UserController } from "../../controllers/user/userController"
import { factoryUserLogin } from "./factoryUserLogin"
import { factoryUserRegister } from "./factoryUserRegister"


export const userController = () => {

    const register = factoryUserRegister()
    const login = factoryUserLogin()
    const controller = new UserController(register,login)
    return controller

}