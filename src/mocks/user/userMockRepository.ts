import { IUser } from "../../models/user";
import { IUserRepository } from "../../repository/user/IUserRepository";



export class UserMockRepository implements IUserRepository{
    private userList:IUser[] = []
    constructor(){
    }
findUser=  async  (email: string) => {
    const user = this.userList.find((user) => user.email === email  )?? [] 
    console.log(this.userList,email,user, 'dentro mock')

    return [user] as IUser[]
}
login= async (user: IUser) =>  {
    const _user = this.findUser(user.email)
    return _user

}
save= (user: IUser) =>  {
    this.userList.push(user)
  
}

}