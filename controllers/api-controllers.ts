// controllers/api-controllers.ts
import { Request, Response, NextFunction } from 'express';
import { Game2, Player } from '../src/Game2';

export var curGames = new Map<string, Game2>();

export class PokerController {
    createNewGame(request: Request, response: Response, next: NextFunction) {
        var gameConfig = request.query;
        console.log(gameConfig);
        var bb = Number(gameConfig['bigBlind']);
        var maxBuyIn = Number(gameConfig['maxBuyIn']);
        var game = new Game2(bb, maxBuyIn);
        let gameId = Date.now().toString();
        curGames.set(gameId, game);
        response.send({ 'id': gameId });
        console.log(curGames);
    }
    addNewPlayer(request: Request, response: Response, next: NextFunction) {
        var playerConfig = request.query;
        var name: string = playerConfig.name?.toString()!;
        var gameId: string = playerConfig.id?.toString()!;
        let game = curGames.get(gameId);
        if (game != undefined)
            game.addPlayer(new Player(name, game));
        console.log(game)
        response.send(game);
    }
}