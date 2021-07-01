<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
      <h2>Componente Http</h2>
      <hr>   
      <button class="btn btn-success my-3 mr-3" @click="getUsersAxios()">Pedir usuarios</button>    


      <div v-if="$store.state.usuarios.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
          </tr>
          <tr v-for="(user,index) in $store.state.usuarios" :key="index">
            <td v-for="(col,index) in getCols" :key="index">{{user[col]}}</td>
          </tr>
        </table>
        <h5 class="alert alert-primary">Se encontraron {{$store.state.usuarios.length}} datos</h5>
      </div>
      <h4 v-else-if="click" class="alert alert-danger">No hay usuarios disponibles</h4>

    </div>
  </section>

</template>


<script lang="js">
  export default  {
    name: 'src-componentes-http',
    props: [],
    mounted () {
    },
    data () {
      return {        
      }
    },
    methods: {
      /* ------ AJAX: AXIOS ------ */
      getUsersAxios() {
        this.$store.dispatch('getUsuarios')
      }
    },
    computed: {
      getCols() {
        return Object.keys(this.$store.state.usuarios[0])
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

  .jumbotron{
    background-color: rgba(168, 27, 27, 0.836);
    color: white;
  }

  hr{
    background-color: #eee;
  }

</style>
