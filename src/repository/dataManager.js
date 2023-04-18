import {Deck, suits, values} from "./Deck";

export class DataManager {
    static newGame() {
        const deck = new Deck();
        deck.createDeck(suits, values);
        deck.shuffle();
        return deck.deck;
    }
}

export default DataManager;