import { IUser} from "../../models/user";


export interface IUserRepository {
    save: (user:IUser) => void,
    login:(user:IUser) =>  Promise<Array<IUser> | []>
    findUser : (email:string) => Promise<Array<IUser> | []>
 }