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

## Dont want to use the package? You can use our endpoints to post server count.
Dont worry if u dont want to use package to post server count u can use our API Endpoints to post.
<h3><b>Below are the Endpoints:</b></h3>
<ol>
<li><code>https://www.flowlist.xyz/api/bots/stats</code> use this endpoint to post server count.</li>
<li><code>https://www.flowlist.xyz/api/bots/${id}</code> use this endpoint to get your bot information.</li>
<li><code>https://www.flowlist.xyz/api/bots/${id}</code> use this endpoint to get information if somone voted for your bot through our website.</li>
</ol>
<b>Note: for 3rd endpoint you have to pass authorization token.</b>

## ⚙ How do i get my bot's token?
its very Simple, Just go to your bot's edit page and click on token on the left side, one thing once you click it it auto copy it to your clipboard and you can paste it in your code to start posting Server Count.

## ⛑ Maintainers
`DevMirza#6447`</br>
`CustomTag#9735`</br>
`VENOM#9208`</br>

## Links
[Website](https://www.flowlist.xyz)</br>
[Discord Server](https://discord.gg/NsRHjhDEzQ)</br>
[GitHub Organization](https://github.com/FlowlistBot)</br>
