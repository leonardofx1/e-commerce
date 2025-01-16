

export interface IUser {
    name:string,
    password:string,
    email:string,
}
export interface IUserLoginReturn extends IUser{
    id:string,
}