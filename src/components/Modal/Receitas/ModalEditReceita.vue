<template>
  <div>
    <div class="modal fade" :class="{show: ShowModal}" tabindex="-1" role="dialog" aria-modal="true" :style="{display: ShowModal ? 'block': 'none'}">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLiveLabel">Editar Item</h5>
            <button type="button" class="close" aria-label="Close" @click="OcultarModal()">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- <p>Woohoo, you're reading this text in a modal!</p> -->
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Nome do Item" v-model="listaReceita.Item">
                <input type="text" class="form-control" placeholder="Quantidade" v-model="listaReceita.quantidade">
                <textarea class="form-control" cols="30" rows="10" placeholder="Descrição de uso" v-model="listaReceita.descricao"></textarea>
            </div>
            <div class="form-group" v-if="alerta">
              <div class="alert alert-success">
                Adicionado
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-cancelar" @click="OcultarModal()"><i class="fa fa-ban"></i> Cancelar</button>
            <button :disabled="!Validar" type="button" class="btn btn-primary" @click="AdicionarItens()"><i class="fa fa-check"></i> Adicionar Item</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade" :class="{show: ShowModal}" :style="{display: ShowModal ? 'block' : 'none'}">

    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      listaReceita: {
        Item:'',
        quantidade: '',
        descricao: '',
      },
      ShowModal: false,
      alerta: false
    };
  },
  computed: {
    Validar(){
      return this.ValidarFormulario(this.listaReceita.Item) && this.ValidarFormulario(this.listaReceita.quantidade) && this.ValidarFormulario(this.listaReceita.descricao)
    }
  },
  methods: {
    ...mapActions(["ActionAdicionarReceitaItem"]),
    ValidarFormulario(campo){
      return campo != ''
    },
    LimparCampo(){
      
      this.listaReceita = {
        Item:'',
        quantidade: '',
        descricao: '',
      }
    },
    AdicionarItens(){
      if(this.ValidarFormulario(this.listaReceita.Item) && this.ValidarFormulario(this.listaReceita.quantidade) && this.ValidarFormulario(this.listaReceita.descricao)){
        var receita = {
          NomeItem: this.listaReceita.Item,
          Quantidade: this.listaReceita.quantidade,
          Descricao: this.listaReceita.descricao
        }
        this.ActionAdicionarReceitaItem(receita)
        this.LimparCampo()
        /* this.OcultarModal() */
      }
    },
    OcultarModal() {
      this.LimparCampo()
      this.ShowModal = false;
    },
    MostrarModal() {
      this.ShowModal = true;
    },
    Adicionar(){
      this.alerta = true
      setTimeout(() => {
        this.alerta = false
      }, 2000);
    }
  },
  created() {
    this.$root.$on("ModalEditReceita::show", () => {
      this.MostrarModal();
    });
    this.$root.$on("ModalEditReceita::hide", () => {
      this.OcultarModal();
    });
  }
};
</script>
<style lang="sass" scoped>
textarea
    resize: none
.form-control
    margin: 10px 0px
</style>