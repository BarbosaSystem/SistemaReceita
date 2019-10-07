<template>
  <div>
    <div class="modal fade" :class="{show: ShowModal}" tabindex="-1" role="dialog" aria-modal="true" :style="{display: ShowModal ? 'block': 'none'}">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLiveLabel">Adicionar Item</h5>
            <button type="button" class="close" aria-label="Close" @click="OcultarModal()">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- <p>Woohoo, you're reading this text in a modal!</p> -->
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Nome do Item">
                <input type="text" class="form-control" placeholder="Dosagem">
                <textarea class="form-control" cols="30" rows="10" placeholder="Descrição de uso"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-cancelar" @click="OcultarModal()"><i class="fa fa-ban"></i> Cancelar</button>
            <button type="button" class="btn btn-primary"><i class="fa fa-check"></i> Adicionar Item</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade" :class="{show: ShowModal}" :style="{display: ShowModal ? 'block' : 'none'}">

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ShowModal: false
    };
  },
  methods: {
    OcultarModal() {
      this.ShowModal = false;
    },
    MostrarModal() {
      this.ShowModal = true;
    }
  },
  created() {
    this.$root.$on("ModalNewReceita::show", () => {
      this.MostrarModal();
    });
    this.$root.$on("ModalNewReceita::hide", () => {
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