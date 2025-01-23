import { FastifyReply, FastifyRequest } from "fastify";
import { IUser } from "../../models/user";

import { UserAlreadyExistsError } from "../../errors/user/UserAlreadyExists";
import { InvalidCredentials } from "../../errors/user/invalidCredentials";
import { IUseUserRegister } from "../../useCase/user/register/IUserRegister";
import { UserLogin } from "../../schemas/user";
import { IUserLogin } from "../../useCase/user/login/IUserLogin";
import { UserNotFound } from "../../errors/user/userNotFound";





export class UserController {
    constructor(private UserRegister:IUseUserRegister,private userLogin:IUserLogin ){

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

    loginUser = async (req: FastifyRequest, reply: FastifyReply) => {
        const res = JSON.parse(req.body as string) as UserLogin

        try {
            const user = await  this.userLogin.login(res)
            reply.code(200).send(user)
        } catch (error) {
            if(error instanceof UserNotFound) {
                reply.code(404).send({message:'user not found'})
            }
            if(error instanceof InvalidCredentials) {
                reply.code(400).send({message:'invalid credentials'})
            }
        }
    }
}