import { NestFactory } from '@nestjs/core'
import { AppModule } from './controllers/app.module'
import * as cookie from 'cookie-parser'

async function bootstrap () {
  const app = await NestFactory.create(AppModule)
  app.use(cookie())
  await app.listen(3000)
}
void bootstrap()
