import { Message, Client } from "discord.js"; 
/**
 * ### GuessTheNumber!
 * With this, users are able to play GuessTheNumber with your Bot!
 * @example
 * client.on("messageCreate", async message => {
 *   if (message.content === '!guessthenumber') {
 *         const game = GuessTheNumber(client, message);
 *         await game.start();
 *   }
 * });
 */
class GuessTheNumber {
    private client: Client;
    private message: Message;
    private answer: number;
    private attemps: number = 3;

    constructor(c: Client, message: Message) {
        this.client = c;
        this.message = message;
        this.answer = Math.floor(Math.random() * 10) + 1;
    }
    /**
     * Start the Game
     */
    public async start() {
        await this.message.reply({ content: 'I am thinking of a number between 1 and 10. Can you guess it?' });
        await this.askForGuess();
    }
    /**
     * This is the Main Code of this Game.
     */
    private async askForGuess() {
        try {
            const response = await this.message.channel.awaitMessages({
                max: 1,
                time: 30000,
                errors: ['time'],
            });
            const guess = parseInt(response.first()?.content || '');

            if (guess === this.answer) {
                this.message.reply({ content: 'Correct! You have won!' });
            } else {
                this.attemps--;

                if (this.attemps > 0) {
                    this.message.reply({ content: `Wrong! You have ${this.attemps} Attemps left!` });
                    await this.askForGuess();
                } else {
                    this.message.reply({ content: 'You have no more attemps!' });
                }
            }
        } catch (error) {
            this.message.reply({ content: "You've waited to long. The Game has been paused" })
        }
    }
}

export {
    GuessTheNumber
}
