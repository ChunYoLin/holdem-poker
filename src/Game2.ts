import { Card } from "./Card";

export class Player {
    name: string;
    chipAmount: number = 0;
    totalBuyIn: number = 0;
    game: Game2;
    active: boolean = false;
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

    bet(amount: number) {
        this.chipAmount -= amount;
    }

    fold() { }
};

export class RoundState {
    pot: number = 0;
    communityCards: Array<Card> = [];
    players: Map<string, {
        hand: Array<Card>,
        folded: boolean,
        active: boolean,
        currentDecision: string,
        currentBet: number,
        availableActions: Array<string>
    }> = new Map();
}

export class Game2 {
    bigBlind: number;
    maxBuyIn: number;
    rounds: RoundState[] = [];
    players: Map<string, Player> = new Map();
    constructor(bigBlind: number, maxBuyIn: number) {
        this.bigBlind = bigBlind;
        this.maxBuyIn = maxBuyIn;
    }

    newRound() {
        let round = new RoundState();
        this.players.forEach((player, key, _) => {
            if (!player.active)
                return;
            round.players.set(key, {
                hand: [],
                folded: false,
                active: true,
                currentDecision: '',
                currentBet: 0,
                availableActions: []
            });
        });
        this.rounds.push(round);
    }

    addPlayer(player: Player) {
        this.players.set(player.name, player);
    }

    buyIn(playerName: string, amount: number) {
        let player = this.players.get(playerName);
        player?.buyIn(amount);
    }

    bet(playerName: string, amount: number) {
        let player = this.players.get(playerName);
        player?.bet(amount);
    }

    fold(playerName: string) {
        let player = this.players.get(playerName);
        player?.fold();
    }
};