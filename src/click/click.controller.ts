import { Body, Controller, Get,Post } from '@nestjs/common';
import { ClickService } from './click.service';
import { Click } from './schemas/click.schema';

@Controller('Click')
export class ClickController {
    constructor(private ClickService:ClickService){}

    @Get()
    async getAllClicks(): Promise<Click[]>{
        return this.ClickService.findAll()
    }

    @Post()
    async createClick(
        @Body()
        Click
    ):Promise<Click>{
        return this.ClickService.create(Click)
    }

}
