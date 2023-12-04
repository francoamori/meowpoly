import { Module } from '@nestjs/common'
import { AppService } from '../services/app.service'
import { JokerController } from './joker.controller'
import { UserController } from './user.controller'

@Module({
  imports: [],
  controllers: [
    UserController,
    JokerController
  ],
  providers: [
    AppService
  ]
})
export class AppModule {}
