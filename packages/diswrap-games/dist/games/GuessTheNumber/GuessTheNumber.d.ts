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
declare class GuessTheNumber {
    private client;
    private message;
    private answer;
    private attemps;
    constructor(c: Client, message: Message);
    /**
     * Start the Game
     */
    start(): Promise<void>;
    /**
     * This is the Main Code of this Game.
     */
    private askForGuess;
}
export { GuessTheNumber };
//# sourceMappingURL=GuessTheNumber.d.ts.map