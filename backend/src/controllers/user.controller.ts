import { Controller, Get, Res } from '@nestjs/common'
import { Response } from 'express'
import { Token } from 'src/decorators/token.decorator'

@Controller('user')
export class UserController {
  @Get()
  public getUser (@Res() res: Response, @Token() token?: string) {
    console.log(token)

    res.status(token != null ? 200 : 404).send(token)
  }
}
