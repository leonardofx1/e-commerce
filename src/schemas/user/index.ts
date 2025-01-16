import * as z from 'zod'

export const userRegister = z.object({
    name: z.string().nonempty(),
    email:z.string().email({message:'invalid format ex: mario@gmail.com'}),
    password:z.string().nonempty().min(5, {message:'min 5 characters'})
})

export const  userLogin = z.object({
    email:z.string().email({message:'invalid format ex: mario@gmail.com'}),
    password:z.string().nonempty().min(5, {message:'min 5 characters'})
}) 