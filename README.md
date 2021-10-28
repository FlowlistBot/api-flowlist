# FlowList API
Official package to interact with Flowlist API to post your bot's Server Count.

## 📝 Requirements
1. Make sure u have added your bot to our listing system.
2. Basic Knowledge of JavaScript.
3. Posting Wrong server count result in Ban from the API Usage and your bot from the list.

## ❔ How do i install the package?
`npm install api-flowlist` or `npm i api-flowlist`

## Usage (JavaScript)
```js
const Discord = require('discord.js');
const client = new Discord.Client();
const FLOW = require('api-flowlist');
const flow = new FLOW("TOKEN-HERE", client);

client.on("ready", async () => {
  flow.serverCount();
});

client.login();
```

## ⚙ How do I get my bot's token?
It's very Simple, [Click Here](https://www.flowlist.xyz) Just go to your bot's edit page and click on the token on the left side, one thing once you click it auto-copy it to your clipboard and you can paste it in your code to start posting Server Count.

## ⛑ Maintainers
`DevMirza#6447`</br>
`CustomTag#9735`</br>
`VENOM#9208`</br>

## Links
[Website](https://www.flowlist.xyz)</br>
[Discord Server](https://discord.gg/NsRHjhDEzQ)</br>
[GitHub Organization](https://github.com/FlowlistBot)</br>
