import { IUser} from "../../../models/user";




export interface IUseUserRegister {
    save: (user:IUser)=> void
    findUser:(email:string) => Promise<IUser[]| []>
}