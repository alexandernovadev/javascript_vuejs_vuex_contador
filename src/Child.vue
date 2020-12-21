<template>
  <div>
    <hr>
    <h1>{{ msg }}</h1>
    <h1>{{ Stringmsg }}</h1>
    <h2>Contador</h2>
    <p>{{count}}</p>
    <p>Double de Count is : {{ getDouble}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="increment10">+10</button>
  </div>
</template>

<script>
//  Va a mapear el state y trae la propiedad que queremos en la view
import { mapState } from 'vuex';

// Mapear las mutaciones (metodos de state)
import { mapMutations } from 'vuex';

// Tambien podemos utilizar mapGetters
import { mapGetters } from 'vuex';

export default {
  name: 'child',
  data () {
    return {
      msg: 'Child Component '
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
  },
}
</script>

<style>
</style>
