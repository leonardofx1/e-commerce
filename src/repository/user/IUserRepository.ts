import { IUser, IUserLoginReturn } from "../../models/user";


export interface IUserRepository {
    register: (user:IUser) => void,
    login:(user:IUser) =>  Promise<Array<IUserLoginReturn> | []>
    findUser : (email:string) => Promise<Array<IUserLoginReturn> | []>
 }