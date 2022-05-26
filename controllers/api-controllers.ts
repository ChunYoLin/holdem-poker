// controllers/api-controllers.ts
import { Request, Response, NextFunction } from 'express';
import { Game } from 'holdem-poker';

export class PokerController {
    games: Array<Game> = [];
    creareNewGame(request: Request, response: Response, next: NextFunction) {
        var gameConfig = request.query
        var bb = gameConfig['bigBlind']

    }
    addNewPlayer(request: Request, response: Response, next: NextFunction) {
        var playerConfig = request.query
    }
}