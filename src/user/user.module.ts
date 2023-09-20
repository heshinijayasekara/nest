import { Module } from '@nestjs/common';
import { UserController as UserController } from './user.controller';
import { UserService as UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
