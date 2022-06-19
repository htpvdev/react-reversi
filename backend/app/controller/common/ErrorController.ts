import express from 'express'

export function notImplemented(req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(501).json({ message: 'Not Implemented.' })
}
