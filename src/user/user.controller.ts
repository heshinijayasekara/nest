import { Body, Controller, Get,Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';

@Controller('User')
export class UserController {
    constructor(private UserService:UserService){}

    @Get()
    async getAllUsers(): Promise<User[]>{
        return this.UserService.findAll()
    }

    @Post()
    async createUser(
        @Body()
        User
    ):Promise<User>{
        return this.UserService.create(User)
    }

}
