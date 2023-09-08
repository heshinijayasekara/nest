import { Module } from '@nestjs/common';
import { ItemController as ItemController } from './item.controller';
import { ItemService as ItemService } from './item.service';

@Module({
  controllers: [ItemController],
  providers: [ItemService]
})
export class ItemModule {}
