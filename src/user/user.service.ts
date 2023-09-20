import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    create(User: any): import("./schemas/user.schema").User | PromiseLike<import("./schemas/user.schema").User> {
        throw new Error('Method not implemented.');
    }
    findAll(): import("./schemas/user.schema").User[] | PromiseLike<import("./schemas/user.schema").User[]> {
        throw new Error('Method not implemented.');
    }
}
