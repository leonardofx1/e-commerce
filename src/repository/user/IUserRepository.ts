import { IUser} from "../../models/user";
import { UserLogin } from "../../schemas/user";


export interface IUserRepository {
    save: (user:IUser) => void,
    login:(user:UserLogin) =>  Promise<Array<IUser> | []>
    findUser : (email:string) => Promise<Array<IUser> | []>
 }