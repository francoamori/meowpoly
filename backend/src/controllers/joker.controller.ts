import { All, Controller, HttpStatus, Res } from '@nestjs/common'
import { Response } from 'express'

@Controller('*')
export class JokerController {
  @All()
  public joker (@Res() res: Response) {
    res.status(HttpStatus.NOT_FOUND).send('Route not implemented')
  }
}
