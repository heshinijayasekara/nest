import { Module } from '@nestjs/common';
import { ClickController as ClickController } from './click.controller';
import { ClickService as ClickService } from './click.service';

@Module({
  controllers: [ClickController],
  providers: [ClickService]
})
export class ClickModule {}
