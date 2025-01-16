import { UserAlreadyExistsError } from "../../../errors/user/UserAlreadyExists";
import { IUser } from "../../../models/user";
import { IUserRepository } from "../../../repository/user/IUserRepository";
import { userRegister } from "../../../schemas/user";
import { IUseUserRegister } from "./IUserRegister";





export class UseUserRegister implements IUseUserRegister {
    constructor(private db:IUserRepository, ){

    }
    register= async(user: IUser) => {

        const _user = userRegister.parse(user)

            const findUser = await this.db.findUser(_user.email)

            if(findUser.length > 0 ) new UserAlreadyExistsError()

            
        


    };


}