<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h1>{{ Stringmsg }}</h1>
    <h2>Contador</h2>
    <p>{{count}}</p>
    <p>Double de Count is : {{ getDouble}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="increment10">+10</button>
    <button @click="incrementAsync">+ Async</button>
  <Child/>
  </div>
</template>

<script>
//  Va a mapear el state y trae la propiedad que queremos en la view
import { mapState } from 'vuex';

// Mapear las mutaciones (metodos de state)
import { mapMutations } from 'vuex';

// Tambien podemos utilizar mapGetters
import { mapGetters } from 'vuex';

import Child from './Child'
export default {
  name: 'app',

  components:{
    Child
  },
  data () {
    return {
      msg: 'Vuex Learn '
    }
  },
  /* SIn el mapState tenemos que traer todo es store */
  //computed:{
    // Con la computed Bindiamos el state con la view
    // count (){
    //   return this.$store.state.count
    // }  
  //}
  /**CON MAPSTATE */
  // Hay que usar spreadOperatos para
  // crear computed custom y poder utilizar
  // el mapState
  computed: {
    ...mapState(['count']),
    ...mapGetters(['getDouble']),

    Stringmsg(){
      return `Me modificaron con computed`
    },

    // Vamos a obtern el getter que creamos en el store
    // double(){
    //   return this.$store.getters.getDouble
    // }
  },
  methods: {
    // Se acceder al estore y dice haga el metodo
    // increment, que en el store, lleva su logica de
    // que hacer
    // increment() {
    //   this.$store.commit('increment')
    // },

    // Este metodo me permite traer los metodos(mutatcion)
    // mas easy que above
    ...mapMutations(['increment','decrement']),

    // we go a utilizar el payload para que incremente 10
    increment10() {
      this.$store.commit('increment',{
        number: 10
      })
     },
    // decrement() {
    //   this.$store.commit('decrement')
    // }
    incrementAsync() {
      this.$store.dispatch('incrementAsync', {
        number: 2
      })
      .then(res=>{
        console.log('Finish Action');
      })
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
