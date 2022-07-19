import { Request, Response } from 'express'
import { UserTokenDto } from 'src/token/dto/user-token.dto'

type Ctx = {
  req: Request & { user?: UserTokenDto }
  res: Response
}

export default Ctx
