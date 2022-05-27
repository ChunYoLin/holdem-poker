export class Player {
    name: string;
    chipAmount: number = 0;
    totalBuyIn: number = 0;
    game: Game2;
    constructor(name: string, game: Game2) {
        this.name = name;
        this.game = game;
    }

    buyIn(amount: number) {
        if (this.chipAmount + amount > this.game.maxBuyIn)
            return;
        this.chipAmount += amount;
        this.totalBuyIn += amount;
    }

};

export class Game2 {
    bigBlind: number;
    maxBuyIn: number;
    players: Player[] = [];
    constructor(bigBlind: number, maxBuyIn: number) {
        this.bigBlind = bigBlind;
        this.maxBuyIn = maxBuyIn;
    }

    addPlayer(player: Player) {
        this.players.push(player);
    }
};