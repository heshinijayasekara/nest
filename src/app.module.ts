import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { ClickModule } from './click/click.module';
import { UserModule } from './user/user.module';
import { ItemController } from './item/item.controller';
import { ClickController } from './click/click.controller';
import { UserController } from './user/user.controller';
import { ItemService } from './item/item.service';
import { ClickService } from './click/click.service';
import { UserService } from './user/user.service';

@Module({
  imports: [ItemModule, ClickModule,UserModule],
  controllers: [AppController, ItemController,ClickController,UserController],
  providers: [AppService,ItemService,ClickService,UserService],
})
export class AppModule {}
