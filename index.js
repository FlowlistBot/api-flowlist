const axios = require('axios');

module.exports = class VOID {
    constructor(token, client) {
        this['token'] = token;
        this['client'] = client;
    }
    
    postStats(message) {
       axios.post("https://www.flowlist.xyz/api/bots/stats", {}, {
        headers: {
          'serverCount': this.client.guilds.cache.size,
          'shardCount': this.client.options.shardCount || null,
          'Content-Type': 'application/json',
          'Authorization': this.token
        },
         }).then(()=>console.log("Flowlist-api > Statistic posted")).catch(()=>null);
    }

    async search(id) {
      return axios.get(`https://www.flowlist.xyz/api/bots/${id}`).then((res)=>res.data);
    }

    async hasVoted(id) {
        return axios.get(`https://www.flowlist.xyz/api/bots/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': this.token
          }
        }).then((res)=>res.data.voted);
    }
}
