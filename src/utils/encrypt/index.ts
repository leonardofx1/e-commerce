import { IEncrypt } from "./IEncrypt";
import bcryptjs from 'bcryptjs'
const {hash, compare,genSalt} = bcryptjs





export class Encrypt implements IEncrypt {
    constructor(){

    }

    hashPassword = async (password: string) =>  {
        const salt =  await  this.salt()
     if(salt) {
        try {
            const passwordHash = await hash(password, salt)
            return passwordHash
            
           } catch (error) {
            console.error(error)
           }
     }
    }
    salt = async (num:number = 6 ) => {
        try {
            const _salt = await genSalt(num)
         
        return _salt
        } catch (error) {
            console.error(error)
        }
    }
    comparePassword=async (password:string, passwordHash:string) => {
       try {
        const res = await compare(password,passwordHash)

        return res
       } catch (error) {
        console.error(error)
       }
        
    }
} 