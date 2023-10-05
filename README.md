[![](https://img.shields.io/discord/1010915072694046794?label=discord&style=for-the-badge&logo=discord&color=5865F2&logoColor=white)](https://discord.gg/gg8mkc4ecP)
[![](https://aschey.tech/tokei/github/tibue99/ezcord?style=for-the-badge)](https://github.com/Code-Contributors/diswrap)


## Infos
You can use it with discord.js or only diswrap. Your choice!

## Installation
```bash
npm install diswrap
```

## Example Usage
```js
const { BotClient, BotIntents, ActivityTypes } = require('diswrap');
const bot = new BotClient({
    intents: [BotIntents.MessageContent, BotIntents.Guilds, BotIntents.GuildMessages],
    token: 'discord bot token',
});

bot.readyConsole({ output: "I'm ready!" });
bot.setPresence({
    activities: [{ name: 'diswrap', type: ActivityTypes.Watching, state: 'Diswrap is Cool!' }],
    status: 'dnd',
});

bot.command({ prefix: '!', name: 'ping', reply: 'Ping Pong!' })
```

## Contributing
We are always happy to receive contributors. Here is how to do:
1. Fork the Repository
2. Add Your Code
3. Create a Ticket in our Discord Server
4. Show us your Code

## Copyright
Copyright © 2023 verleihernix, Code Contributors (CC Studios)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
