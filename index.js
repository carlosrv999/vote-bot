const axios = require("axios");
const constants = require('./params');

setInterval(() => {
  axios
    .get(`${constants.getEmojiUrl}`)
    .then(res => {
      if (res.data?.length > 0) {
        console.log("Si se puede procesar");
        const items = res.data;
        const item = items[Math.floor(Math.random()*items.length)];
        console.log("votando por: ", item)
        axios.post(`${constants.postVoteUrl}`, { "emoji_id" : item.id })
          .then(res => {
            console.log("votado: ", res.data)
          })
          .catch(error => {
            console.log("ha ocurrido un error!", error);
          })
      }
    })
    .catch(error => {
      console.log(error);
    })
  
}, 5000)