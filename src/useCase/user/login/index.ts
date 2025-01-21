import { InvalidCredentials } from "../../../errors/user/invalidCredentials";
import { UserAlreadyExistsError } from "../../../errors/user/UserAlreadyExists";
import { UserNotFound } from "../../../errors/user/userNotFound";
import { IUser } from "../../../models/user";
import { IUserRepository } from "../../../repository/user/IUserRepository";
import { UserLogin } from "../../../schemas/user";
import { IValidateCredentials } from "../../../utils/validateUser/IValidateCredentials";
import { IUserLogin } from "./IUserLogin";



export class UseUserLogin implements IUserLogin {
    constructor(private db:IUserRepository, private validateCredentials: IValidateCredentials){

    }
 login= async(user: UserLogin) => {
      
        const _user = this.validateCredentials.validateLogin(user)
        const find = await this.db.findUser(_user.email)
        if(find.length <= 0 )  new UserNotFound() 
            

      
      }

 }



}