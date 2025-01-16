import { sql, SQL } from "drizzle-orm";
import { db } from "../../db";
import { user } from "../../db/schema";
import { IUser, IUserLoginReturn } from "../../models/user";
import { IUserRepository } from "./IUserRepository";



export class UserRepository implements IUserRepository{
    constructor( ) {

    }
    login= async (userProp: IUser) => {
        const _user = await  this.findUser(userProp.email)
        return _user
    }
    register= async (userProp: IUser) => {
            const saveUser = await db.insert(user).values(userProp)
    };
    findUser = async (email: string) => {


        const _user = await db.select().from(user).where(sql`${user.email} = ${email}`).limit(1) as Array<IUserLoginReturn> | [] 
        return _user

    }
 }
