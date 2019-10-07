<template>
    <!-- <div class="pagina" :style="{show: ShowModal}">

    </div> -->
    <div>
    <div class="modal fade bd-example-modal-lg" :class="{show: ShowModal}"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
      :style="{display: ShowModal ? 'block': 'none'}"
    >   

    <div class="container" style="background-color: white; height: 100%">
        <!-- <div class="row">
            <div class="col-md-8 offset-md-2">
                <h1 class="text-center">Dr. José Jacinto Araújo Martins</h1>
                <h4 class="text-center">ENDOCRINOLOGIA E METABOLOGIA</h4>
                <h4 class="text-center">CRM 19.018</h4>
                <button class="btn btn-primary" @click="Imprimir()">Imprimir</button>
            </div>
        </div> -->
        <div class="row">
            <div class="col-md-12">
                <div class="area" style="margin-top: 200px">
                    <h2 style="font-size: 1.5rem">Nome do Paciente: Fulano de Tal</h2>
                    <h2 style="font-size: 1.5rem">Data: 07/10/2019</h2>
                    <button class="btn btn-primary" @click="Imprimir()">Imprimir</button>
                </div>
                <div class="area" style="margin-top: 30px">
                    <h2 style="font-size: 1.25rem">Prescrição médica:</h2>
                    <div class="area-prescricao" style="font-family: Courier new">
                        <ul class="lista-receita" style="list-style: none">
                            <li class="lista-receita-item">1 - Predsim 20mg - 1 caixa <br>
                            <span class="observacao">Observação: tomar 2 co. após café da manhã p/ 5 dias.</span>
                            </li>
                            <li class="lista-receita-item">2 - Piemont ou Viatine 10mg - 90 dias <br>
                            <span class="observacao">Observação: tomar 1 cp. anoite.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" style="position: fixed; bottom: 0">
            <div class="col-md-12 offset-md-3 col-xs-12">
                <h5 class="text-center">Rua Barão do Rio Branco, 681 - SALA 1006 - Centro - Ed. Climério Vieira</h5>
                <h5 class="text-center">Fone: (33) 3271-7394 / 99803-7394 - Governador Valadares - Minas Gerais</h5>
            </div>
        </div>
    </div>
        
        
      <!-- <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLiveLabel">Fulano de Tal</h5>
            <button type="button" class="close" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" @click="Imprimir()">Imprimir</button>
          </div>
        </div>
      </div> -->
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
            print: false,
            ShowModal: false
        }
    },
    methods: {
        OcultarModal() {
            this.ShowModal = false;
        },
        MostrarModal() {
            this.ShowModal = true;
        },
        Imprimir(){
            this.print = true
            window.print()
        }
    },
    created() {
    this.$root.$on("ModalPrint::show", () => {
      this.MostrarModal();
    });
    this.$root.$on("ModalPrint::hide", () => {
      this.OcultarModal();
    });
  }
}
</script>
<style  scoped>
.lista-receita{
    padding: 0;
}
.container{
    max-width: 968px;
}
@media print {
.lista-receita-item{
    font-size: 1.5em;
}
.observacao{
    font-weight: 700;
}
.modal{
    background-color: white;
}
button{
    display: none;
}
.modal-header{
    background-color: white
}

}
/* 
@media print {
  body, page {
    margin: 0;
    box-shadow: 0;
  }
} */
</style>