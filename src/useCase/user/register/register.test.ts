
import {beforeEach, describe, expect, test, vi} from 'vitest'
import { UseUserRegister } from './'
import { IUseUserRegister } from './IUserRegister'
import { IUserRepository } from '../../../repository/user/IUserRepository'
import { UserMockRepository } from '../../../mocks/user/userMockRepository'
import { IValidateCredentials } from '../../../utils/validateUser/IValidateCredentials'
import { ValidateCredentials } from '../../../utils/validateUser'
import { IUser } from '../../../models/user'
import { IEncrypt } from '../../../utils/encrypt/IEncrypt'
import { Encrypt } from '../../../utils/encrypt'


describe('useRegister test',() => {
    
    let register:IUseUserRegister
    let _mockRepository:IUserRepository
    let validate: IValidateCredentials
    let encrypt:IEncrypt
  beforeEach(() => {
    _mockRepository =new UserMockRepository()
    validate = new ValidateCredentials()
    encrypt = new Encrypt()
    register = new UseUserRegister(_mockRepository,validate,encrypt)
  })
test(' the user should be able to register successfully   ', async () => {
    vi.spyOn(_mockRepository,'findUser').mockResolvedValue([{
        id:'01',
        name:'leo',
        email:'leo@gmail.com',
        password:'15456423'
    }])
  
    const user:IUser = {
        id:'01',
        name:'leo',
        email:'leo@gmail.com',
        password:'15456423'
    }
          register.save(user)
      const _user = await register.findUser(user.email)
   
    expect(user).toEqual(_user[0])
})
})