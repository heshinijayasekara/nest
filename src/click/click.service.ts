import { Injectable } from '@nestjs/common';

@Injectable()
export class ClickService {
    create(Click: any): import("./schemas/click.schema").Click | PromiseLike<import("./schemas/click.schema").Click> {
        throw new Error('Method not implemented.');
    }
    findAll(): import("./schemas/click.schema").Click[] | PromiseLike<import("./schemas/click.schema").Click[]> {
        throw new Error('Method not implemented.');
    }
}
