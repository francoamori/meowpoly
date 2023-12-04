import { type ExecutionContext, createParamDecorator } from '@nestjs/common'

export const Token = createParamDecorator(
  (data: undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    return request.cookies.token
  }
)
