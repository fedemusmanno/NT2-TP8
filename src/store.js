import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const URL = 'https://60ad4ee580a61f0017330b53.mockapi.io/usersTP6'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuarios : []
    },
    actions : {
        async getUsuarios({commit}) {
            try {
                let {data:usuarios} = await axios(URL)
                commit('getUsuarios',usuarios)
            }
            catch {
                commit('getUsuarios',[])
            }
        },
        async postUsuarioAsyncAwait({commit}, usuario) {
            try {
                await axios.post(URL, usuario)
                commit('postUsuarios',usuario)
            }
            catch(err) {
                console.log('Hubo una falla', err)
            }
        },

        postUsuarioThenCatch({commit}, usuario){
        axios.post(URL, usuario)
        .then(usuario => commit('postUsuarios',usuario))
        .catch(error => {
            console.error("Hubo un error", error)
        })
        }
    },
    
    mutations : {
        getUsuarios(state,usuarios) {
            state.usuarios = usuarios
        },
        postUsuarios(usuario){
            console.log(usuario)
        }
    }
})


