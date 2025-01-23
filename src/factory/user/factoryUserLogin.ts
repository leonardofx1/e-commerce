import { UserRepository } from "../../repository/user"
import { userLogin } from "../../schemas/user"
import { UseUserLogin } from "../../useCase/user/login"
import { Encrypt } from "../../utils/encrypt"
import { ValidateCredentials } from "../../utils/validateUser"



export const factoryUserLogin = () => {
    const encrypt = new Encrypt()
    const validate = new ValidateCredentials()
    const db = new UserRepository()
    const userLogin = new UseUserLogin(db, validate,encrypt)
    return userLogin
}