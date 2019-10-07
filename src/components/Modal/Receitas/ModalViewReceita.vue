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
            <h5 class="modal-title" id="exampleModalLiveLabel">Fulano de Tal</h5>
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
                  <th>Dosagem</th>
                  <th>Descrição</th>
                  <th>Tipo de uso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Predsim 20mg</td>
                  <td>1cx</td>
                  <td>Tomar 2cp após o café da manhã</td>
                  <td>Oral</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-cancelar" @click="OcultarModal()">
              <i class="fa fa-times-circle"></i> Cancelar
            </button>
            <button type="button" @click="Imprimir()" class="btn btn-primary">
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
    },
    Imprimir(){
      this.$root.$emit("ModalPrint::show");
    }
  },
  created() {
    this.$root.$on("ModalViewReceita::show", () => {
      this.MostrarModal();
    });
    this.$root.$on("ModalViewReceita::hide", () => {
      this.OcultarModal();
    });
  }
};
</script>
<style lang="sass" scoped>

</style>