// routes/api-routes.ts
import express, { Router, Request, Response, NextFunction } from 'express';
import { curGames, PokerController } from '../controllers/api-controllers';


export class ApiRouter {
    router: Router;
    pokerController: PokerController;
    constructor() {
        this.pokerController = new PokerController();
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.use(express.json());
        this.router.get('/createNewGame', this.pokerController.createNewGame);
    }
}