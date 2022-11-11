const {createApp } = Vue;

//console.log(axios);

createApp({

  data(){
    return{
      title: 'Benvenuto Ajax',
      numero: ''
    }
  },
  methods:{
    getApi(){
      // nella parentesi del get inserire la url dell'API
      axios.get('https://flynn.boolean.careers/exercises/api/random/int')
      .then( risultato => {
        // then risponde quando lo status della chiamata è 200
        // in vue utilizzare una arrow funct
        console.log('Fine chiamata axios', risultato.data);
        this.numero = risultato.data.response
      })
      .catch( errore => {
        this.title = errore.code
        console.log(errore.code);
      })
    }
  },
  mounted(){
    
    this.getApi();
    console.log('LOG SCRITTO DOPO AXIOS');
  }

}).mount('#app');