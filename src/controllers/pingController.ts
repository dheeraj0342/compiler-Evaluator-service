import { Request, Response } from 'express';

export const pingController = (req: Request, res: Response) => {
    return res.status(200).json({ message: 'pong' });
};