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
          <input v-model="Cliente.Nome" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
          <div class="input-group-append">
            <button @click="AdicionarCliente()" style="margin: 0px" class="btn btn-primary" type="button" id="button-addon2">
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
              <th>Tipo de Uso</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in GetListaReceita" :key="item.codigo">
              <td>{{item.NomeItem}}</td>
              <td>{{item.Quantidade}}</td>
              <td>{{item.Descricao}}</td>
              <td class="text-center">
                <button class="btn btn-warning">
                  <i class="fas fa-pen-square"></i>
                </button>
                <button class="btn btn-danger">
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
      <div class="grupo-botoes">
        <button class="btn btn-sucesso" @click="Imprimir()">
          <i class="fas fa-check-circle"></i> Gravar Dados
        </button>
        <button class="btn btn-cancelar">
          <i class="fas fa-ban"></i> Cancelar
        </button>
      </div>
    <modal-novo />
    <receita-print />
  </div>
</template>
<script>
import ModalNovo from '../../components/Modal/Receitas/ModalNewReceita'
import ReceitaPrint from '../../components/Modal/Receitas/ModalReceitaPrint'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    ModalNovo, ReceitaPrint
  },
  data (){
    return {
      Editar: true,
      ListaReceita:[

      ],
      Cliente: {
        Nome: '',
        Itens: []
      }
    }
  },
  computed: {
    ...mapGetters(["GetCliente", "GetListaReceita"]),
    LiberarAdicionarCliente(){
      return this.GetCliente != ''
    }
  },
  methods: {
    ...mapActions(["ActionAdicionarCliente"]),
    AdicionarCliente(){
      if(this.Cliente.Nome != ''){
        this.ActionAdicionarCliente(this.Cliente.Nome)
        this.Editar = false
      }
    },
    EditarCliente(){
      this.Editar = true
      this.Cliente.Nome = this.GetCliente
    },
    AbrirModalNovaReceita(){
      this.$root.$emit("ModalNewReceita::show")
    },
     Imprimir(){
      this.$root.$emit("ModalPrint::show");
    }
  },
  beforeRouteLeave (to, from, next) {
    if(this.Cliente.Nome != ''){
      if(confirm("Existem dados não preenchidos. deseja cancelar esta operação?")){
        this.Cliente.Nome = ''
        next()
      }
    }
    else{
      next()
    }
  },
}
</script>