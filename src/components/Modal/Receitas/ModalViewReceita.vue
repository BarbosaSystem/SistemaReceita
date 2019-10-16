<template>
  <div>
    <div
      class="modal fade bd-example-modal-lg"
      :class="{show: ShowModal}"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      :style="{display: ShowModal ? 'block': 'none'}"
    >
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLiveLabel">{{ReceitaItens.Nome}}</h5>
            <button type="button" class="close" aria-label="Close" @click="OcultarModal()">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- <p>Woohoo, you're reading this text in a modal!</p> -->
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Nome do Item</th>
                  <th>Quantidade</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in ReceitaItens.itens" :key="item.codigo">
                  <td>{{item.NomeItem}}</td>
                  <td>{{item.Quantidade}}</td>
                  <td>{{item.Descricao}}</td>
                </tr>
              </tbody>
            </table>
            <div class="form-group">
              <button class="btn btn-primary" disabled="disabled"><i class="fa fa-plus"></i> Adicionar Itens</button>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-cancelar" @click="OcultarModal()">
              <i class="fa fa-times-circle"></i> Cancelar
            </button>
            <button type="button" @click="Imprimir(ReceitaItens.Codigo)" class="btn btn-primary">
              <i class="fa fa-print"></i> Imprimir
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal-backdrop fade"
      :class="{show: ShowModal}"
      :style="{display: ShowModal ? 'block' : 'none'}"
    ></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      ShowModal: false,
      ReceitaItens: []
    };
  },
  methods: {
    OcultarModal() {
      this.ShowModal = false;
    },
    MostrarModal() {
      this.ShowModal = true;
    },
    Imprimir(codigo){
      this.$root.$emit("ModalPrint::show", codigo); 
    }
  },
  computed: {
    ...mapGetters(["GetReceitaInfo"])
  },
  created() {
    this.$root.$on("ModalViewReceita::show", (codigo) => {
      this.MostrarModal();
      var lisReceita = this.GetReceitaInfo(codigo)
      this.ReceitaItens.Codigo = codigo
      this.ReceitaItens.Nome = lisReceita.NomeCliente
      this.ReceitaItens.itens = lisReceita.ListaReceita
      
    });
    this.$root.$on("ModalViewReceita::hide", () => {
      this.OcultarModal();
    });
  }
};
</script>
<style lang="sass" scoped>

</style>