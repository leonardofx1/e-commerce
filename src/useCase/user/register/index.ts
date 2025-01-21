import { UserAlreadyExistsError } from "../../../errors/user/UserAlreadyExists";
import { IUser } from "../../../models/user";
import { IUserRepository } from "../../../repository/user/IUserRepository";

import { ValidateCredentials } from "../../../utils/validateUser";
import { IUseUserRegister } from "./IUserRegister";





export class UseUserRegister implements IUseUserRegister {
    constructor(private db:IUserRepository,private validateCredentials :ValidateCredentials){

    }
    save= async(user: IUser) => {

        const _user = this.validateCredentials.validateRegister(user)
        const findUser = await this.findUser(user.email)
        
        if(findUser.length > 0 ) new UserAlreadyExistsError()
            
            this.db.save(user)
        };
        findUser = async (email: string) => {
        return await this.db.findUser(email)

    };

}