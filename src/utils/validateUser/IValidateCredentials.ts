import { IUser } from "../../models/user";
import { UserLogin } from "../../schemas/user";



export interface IValidateCredentials {

    validateRegister : (user:IUser) => IUser 
    validateLogin : (user:UserLogin) => UserLogin
}