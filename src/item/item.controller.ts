import { Body, Controller, Get,Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { Item } from './schemas/item.schema';

@Controller('Item')
export class ItemController {
    constructor(private ItemService:ItemService){}

    @Get()
    async getAllItems(): Promise<Item[]>{
        return this.ItemService.findAll()
    }

    @Post()
    async createItem(
        @Body()
        Item
    ):Promise<Item>{
        return this.ItemService.create(Item)
    }

}
