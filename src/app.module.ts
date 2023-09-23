import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { ClickModule } from './click/click.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ItemModule, ClickModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
