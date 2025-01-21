import { IUser } from "../../../models/user";
import { UserLogin } from "../../../schemas/user";

export interface IUserLogin {
    login:(user:UserLogin) => Promise<IUser>
}

