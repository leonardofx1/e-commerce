import { InvalidCredentials } from "../../errors/user/invalidCredentials";
import { IUser } from "../../models/user";
import { UserLogin, userLogin, userRegister } from "../../schemas/user";
import { IUserLogin } from "../../useCase/user/login/IUserLogin";
import { IValidateCredentials } from "./IValidateCredentials";




export class ValidateCredentials implements IValidateCredentials {
    constructor(){
    }

    validateRegister = (user:IUser) => {
       try {
       const _user =  userRegister.parse(user) as IUser
       return _user
       } catch (error) {
        throw new InvalidCredentials()
       }
    }
    validateLogin= (user:UserLogin) => {
       try {
     
       const _user =  userLogin.parse(user) as UserLogin
       return _user
       } catch (error) {
        throw new InvalidCredentials()
       }
    }
}