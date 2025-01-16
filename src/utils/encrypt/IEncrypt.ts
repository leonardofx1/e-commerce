

export interface IEncrypt {
    hashPassword : (password:string) => Promise<string | undefined>,
    comparePassword: (password:string,passwordHash:string) => Promise<boolean | undefined>,
    salt: (num:number) => Promise<string | undefined>
}