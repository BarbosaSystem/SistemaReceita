<template>
  <div class="content-bar">
    <h1 class="text-center titulo">Nova Receita</h1>
    <template v-if="!Editar">
      <h4 class="text-center my-4"> 
      Nome do Paciente: {{GetCliente}}
      <button class="btn btn-warning" @click="EditarCliente()"><i class="fa fa-edit"></i></button>
    </h4>         
    </template>
    <template v-else-if="Editar">
      <div class="form-group">
        <div class="input-group mb-3">
          <input autofocus v-model="Cliente.Nome" type="text" class="form-control" placeholder="Nome do Cliente" aria-label="Recipient's username" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button :disabled="(Cliente.Nome == '')" @click="AdicionarCliente()" style="margin: 0px" class="btn btn-primary" type="button" id="button-addon2">
            <i class="fa fa-check"></i> Gravar
            </button>
          </div>
        </div>
      </div>
    </template>
      <div class="form-group">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantidade</th>
              <th>Descrição</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in ListaReceita" :key="index">
              <td>{{item.NomeItem}}</td>
              <td>{{item.Quantidade}}</td>
              <td>{{item.Descricao}}</td>
              <td class="text-center">
                <button class="btn btn-warning mx-3" @click="MostrarReceitaItem(index)">
                  <i class="fas fa-pen-square"></i>
                </button>
                <button class="btn btn-danger" @click="RemoverReceitaItem(index)">
                  <i class="fas fa-window-close"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-primary" :disabled="!LiberarAdicionarCliente" type="button" @click="AbrirModalNovaReceita()">
          <i class="fas fa-plus-circle"></i> Adicionar Item
        </button>
      </div>
      <div class="grupo-botoes" v-if="ListaReceita.length >= 1">
        <button class="btn btn-sucesso mr-auto" @click="GravarDados()">
          <i class="fas fa-check-circle"></i> Gravar Dados
        </button>
        <button class="btn btn-cancelar ml-5">
          <i class="fas fa-ban"></i> Cancelar
        </button>
      </div>
    <modal-edit @ItemLista="EditarItemReceita" />
    <modal-novo @AddItemLista="AdicionarItemReceita" />
    <receita-print />
  </div>
</template>
<script>
import ModalNovo from '../../components/Modal/Receitas/ModalNewReceita'
import ModalEdit from '../../components/Modal/Receitas/ModalEditReceita'
import ReceitaPrint from '../../components/Modal/Receitas/ModalReceitaPrint'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    ModalNovo, ReceitaPrint, ModalEdit
  },
  data (){
    return {
      DadosGravados: false,
      Editar: true,
      ListaReceita:[

      ],
      LiberarItens: false,
      Cliente: {
        Nome: '',
        Itens: []
      }
    }
  },
  created() {
    this.ActionDadosGravados(false)
  },
  computed: {
    ...mapGetters(["GetCliente", "GetListaReceita", "GetDadosGravados"]),
    LiberarAdicionarCliente(){
      return this.GetCliente != ''
    }
  },
  methods: {
    ...mapActions(["ActionAdicionarCliente","ActionNovoCliente", "ActionLimparCliente", "ActionLimparListaReceita", "ActionDadosGravados"]),
    AdicionarItemReceita(index){
      this.ListaReceita.push(index)
    },
    RemoverReceitaItem(index){
      this.ListaReceita.splice(index, 1)
    },
    EditarItemReceita(index){
      var vm = this
      /* this.ListaReceita.$set(index.Codigo, receita) */
      vm.$set(vm.ListaReceita, index.Codigo, {
        NomeItem: index.NomeItem,
        Quantidade: index.Quantidade,
        Descricao: index.Descricao
      })
    },
    AdicionarCliente(){
      if(this.Cliente.Nome != ''){
        this.ActionNovoCliente(this.Cliente.Nome)
        this.Editar = false
      }
    },
    MostrarReceitaItem(codigo){
      var receita = this.ListaReceita[codigo]
      receita.codigo = codigo
      this.$root.$emit("ModalEditReceita::show", receita)
    },
    EditarCliente(){
      this.Editar = true
      /* this.Cliente.Nome = this.GetCliente */
    },
    EditarModalReceita(){
      this.$root.$emit("ModalEditReceita::show")
    },
    AbrirModalNovaReceita(){
      this.$root.$emit("ModalNewReceita::show")
    },
    AdicionarData(){
      return new Date.now()
    },
    async GravarDados(){
      this.$root.$emit("Spinner::show")
      let dataReceita = new Date()
      var ReceitaItem = {
        NomeCliente: this.Cliente.Nome.toUpperCase(),
        ListaReceita: this.ListaReceita,
        Data: dataReceita.getDate() +'/'+ (dataReceita.getMonth() + 1 )+'/' + dataReceita.getFullYear()
      }
      
      await this.$firebase.database().ref('Receita/').push(ReceitaItem).then( (data) => {
        this.ActionLimparCliente()
        this.ListaReceita = []
        this.ActionDadosGravados(true)
        this.Cliente.Nome = ''
        this.Editar = true
        var dados = {
              codigo: data.key,
              Data: ReceitaItem.Data,
              ListaReceita: ReceitaItem.ListaReceita,
              NomeCliente: ReceitaItem.NomeCliente
        }
        this.Imprimir(dados)
        
      })
      this.$root.$emit("Spinner::hide")
    },
    Imprimir(dados){
      this.$root.$emit("ModalPrint::show", dados);
      /* this.$router.push("/receitas"); */
    }
  },
  beforeRouteLeave (to, from, next) {
    if(this.Cliente.Nome != '' && !this.GetDadosGravados){
      if(confirm("Existem dados não preenchidos. deseja cancelar esta operação?")){
        //Limpar Cliente
        this.ActionLimparCliente()
        //Limpar Receitas
        this.ActionLimparListaReceita()
        next()
      }
    }
    else{
      next()
    }
  },
}
</script>