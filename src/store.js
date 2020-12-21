import Vue from "vue";
import Vuex from "vuex";
// Decirle a vue que uso vuew
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },

  // Vamos a utlizar getter
  // this getter me devulve el doble de count
  getters: {
    // Aqui va la funcion
    // recibe el state y tambien puede utlizar otros getter
    // en el segundo parametro
    getDouble(state, getters) {
      return state.count * 2;
    }
  },

  mutations: {
    // Es very important that
    //pasar state por paramenters

    //  Tambien se le puede pasar un payload (data de user)
    // El payload debe ser un objeto, si no se le pasa nada
    // then coje el objeto vacio y sumaria uno
    increment(state, payload = {}) {
      // state.count++
      state.count += payload.number || 1;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    // Las action son como las mutation PERO
    // soportan asincronia

    incrementAsync(context, payload) {
      // Simular la peticion al servidor
      return new Promise((resolve, reject) => {
        // context en este caso seria el state
        // y pues payload la info de user
        setTimeout(() => {
          context.commit("increment", payload);
          resolve()
        }, 2000);
      });
    }
  }
});
export default store;
