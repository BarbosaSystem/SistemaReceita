<template>
  <div class="content-bar">
    <h1 class="text-center titulo">Relação de Receitas</h1>
    <div class="form-group">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Nome do Paciente</th>
            <th>Data</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in GetLoadReceitas" :key="item.codigo">
            <td>{{item.NomeCliente}}</td>
            <td>{{item.Data}}</td>
            <td class="opcoes">
              <button class="btn btn-primary" @click="AbrirModalMostrarReceita(item.codigo)">
                <i class="fas fa-search"></i>
              </button>
              <button class="btn btn-danger" @click="RemoverCliente(item)">
                  <i class="fas fa-window-close"></i>
                </button>
            </td>
          </tr>
        </tbody>
      </table>
      <receita-viewer />
      <receita-print />
    </div>
  </div>
</template>
<script>
import ReceitaViewer from '../../components/Modal/Receitas/ModalViewReceita'
import ReceitaPrint from '../../components/Modal/Receitas/ModalReceitaPrint'
import { mapActions, mapGetters } from 'vuex'

export default {
  async mounted() {
    await this.CarregarClientes()
  },
  data(){
    return{
      ListaCliente: []
    }
  },
  computed: {
    ...mapGetters(["GetReceitaInfo", "GetLoadReceitas"])
  },
  components: {
    ReceitaViewer, ReceitaPrint
  },
  methods: {
    ...mapActions(["ActionAdicionarCliente", "ActionRemoverReceita"]),
    RemoverCliente(item){
      if(confirm("Deseja remover este registro?")){
        var vm = this
      this.$firebase.database().ref('/Receita/' + item.codigo).remove().then ( () => {
        vm.ActionRemoverReceita(item)
      })
      }
    },
    AbrirModalMostrarReceita(codigo){
      this.$root.$emit("ModalViewReceita::show", codigo)
    },
    async CarregarClientes(){
      var vm = this
      await this.$firebase.database().ref('Receita/').once('value')
        .then((data) => {
          var dados = data.val()
          var lista =[]
          for(let key in dados){
            lista.push({
              codigo: key,
              Data: dados[key].Data,
              ListaReceita: dados[key].ListaReceita,
              NomeCliente: dados[key].NomeCliente
            })
          }
          
          vm.ActionAdicionarCliente(lista)
          /* this.ListaCliente.push(Receita) */
          
        })
    }
  }
}
</script>