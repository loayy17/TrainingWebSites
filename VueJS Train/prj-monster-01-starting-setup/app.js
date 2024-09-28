const app = Vue.createApp({
  data() {
    return {
      playerHearth: 100,
      monsterHealth: 100,
    };
  },
  method : {
    attackMonster (){
        this.monsterHealth = this.monsterHealth - Math.floor(Math.random() *(12-5)) + 5
    }
    
  }
});

app.mount("game");
