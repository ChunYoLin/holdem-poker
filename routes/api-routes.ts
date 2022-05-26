// routes/api-routes.ts
import express, { Router, Request, Response, NextFunction } from 'express';
import { PokerController } from '../controllers/api-controllers';

const pokerController = new PokerController;

export class ApiRouter {
    router: Router;
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.use(express.json());
        this.router.get('/createNewGame', pokerController.creareNewGame);
    }
}