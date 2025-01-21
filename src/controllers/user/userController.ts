import { FastifyReply, FastifyRequest } from "fastify";
import { IUser } from "../../models/user";

import { UserAlreadyExistsError } from "../../errors/user/UserAlreadyExists";
import { InvalidCredentials } from "../../errors/user/invalidCredentials";
import { IUseUserRegister } from "../../useCase/user/register/IUserRegister";





export class UserController {
    constructor(private UserRegister:IUseUserRegister  ){

    }
    registerUser = async (req: FastifyRequest, reply: FastifyReply) => {

        try {
            const user = await JSON.parse(req.body as string) as IUser
       
            await this.UserRegister.save(user)
            reply.code(201).send({message:'user registered successful'})
        } catch (error) {
            if (error instanceof UserAlreadyExistsError) {
                reply.code(409).send({  message: 'user already exists ' })
            } else if (error instanceof InvalidCredentials) {

                reply.code(400).send({
                 message: 'credentials invalid'
                })
            }
        
        }



    }

    loginUser = (req: FastifyRequest, reply: FastifyReply) => {
        const res = JSON.parse(req.body as string) as IUser
        console.log(res)
    }
}