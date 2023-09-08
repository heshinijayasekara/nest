import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemService {
    create(Item: any): import("./schemas/item.schema").Item | PromiseLike<import("./schemas/item.schema").Item> {
        throw new Error('Method not implemented.');
    }
    findAll(): import("./schemas/item.schema").Item[] | PromiseLike<import("./schemas/item.schema").Item[]> {
        throw new Error('Method not implemented.');
    }
}
