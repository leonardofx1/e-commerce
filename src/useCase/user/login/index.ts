import { InvalidCredentials } from "../../../errors/user/invalidCredentials";
import { UserAlreadyExistsError } from "../../../errors/user/UserAlreadyExists";
import { UserNotFound } from "../../../errors/user/userNotFound";
import { IUser } from "../../../models/user";
import { IUserRepository } from "../../../repository/user/IUserRepository";
import { UserLogin } from "../../../schemas/user";
import { IEncrypt } from "../../../utils/encrypt/IEncrypt";
import { IValidateCredentials } from "../../../utils/validateUser/IValidateCredentials";
import { IUserLogin } from "./IUserLogin";



export class UseUserLogin implements IUserLogin {
    constructor(private db:IUserRepository, private validateCredentials: IValidateCredentials ,private encrypt:IEncrypt){

    }
 login= async(user: UserLogin) => {
      
   console.log(user)
   const userValidate = this.validateCredentials.validateLogin(user)
   const _user = await this.db.login(userValidate)
   if(_user.length <= 0 ) throw new UserNotFound() 
    
    console.log('haeeeeee',_user.length <= 0 , _user)
        const passwordHash = _user[0].password
        
        const matchPassword = this.encrypt.comparePassword(user.password,passwordHash)
        if(!matchPassword) new InvalidCredentials()
            
          return _user[0]
      
      }

 }



