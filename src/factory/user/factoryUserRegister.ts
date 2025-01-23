import { UserRepository } from "../../repository/user";
import { userRegister } from "../../schemas/user";
import { UseUserRegister } from "../../useCase/user/register";
import { IUseUserRegister } from "../../useCase/user/register/IUserRegister";
import { Encrypt } from "../../utils/encrypt";
import { ValidateCredentials } from "../../utils/validateUser";


export const factoryUserRegister = (): IUseUserRegister => {
    const encrypt = new Encrypt()
    const dbRepository = new UserRepository()
    const validate = new ValidateCredentials()
    const mockRegister = new UseUserRegister(dbRepository,validate,encrypt)

    return mockRegister

}