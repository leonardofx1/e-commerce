import { sql} from "drizzle-orm";
import { db } from "../../db";
import { user } from "../../db/schema";
import { IUser } from "../../models/user";
import { IUserRepository } from "./IUserRepository";
import { UserLogin } from "../../schemas/user";



export class UserRepository implements IUserRepository{
    constructor( ) {

    }
    login= async (userProp: UserLogin) => {
        const _user = await  this.findUser(userProp.email)
        return _user
    }
    save= async (userProp: IUser) => {
            const saveUser = await db.insert(user).values({id:userProp.id,name:userProp.name,email:userProp.email,password:userProp.password})
    };
    findUser = async (email: string) => {


        const _user = await db.select().from(user).where(sql`${user.email} = ${email}`).limit(1) as Array<IUser> | [] 
        return _user

    }
 }
