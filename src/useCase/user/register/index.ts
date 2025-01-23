import { UserAlreadyExistsError } from "../../../errors/user/UserAlreadyExists";
import { IUser } from "../../../models/user";
import { IUserRepository } from "../../../repository/user/IUserRepository";
import { IEncrypt } from "../../../utils/encrypt/IEncrypt";

import { ValidateCredentials } from "../../../utils/validateUser";
import { IUseUserRegister } from "./IUserRegister";





export class UseUserRegister implements IUseUserRegister {
    constructor(private db: IUserRepository, private validateCredentials: ValidateCredentials, private encrypt: IEncrypt) {

    }
    save = async (user: IUser) => {

        const _user = this.validateCredentials.validateRegister(user)
        const findUser = await this.findUser(user.email)

        if (findUser.length > 0) throw new UserAlreadyExistsError()
        const passwordHash = await this.encrypt.hashPassword(user.password)
        user.password = passwordHash as string
        
        this.db.save(user)
    };
    findUser = async (email: string) => {
        return await this.db.findUser(email)

    };

}