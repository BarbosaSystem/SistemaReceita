<template>
  <div>
    <div class="impressao">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header text-center" style="visibility: hidden;">
              <h1 class="text-center">Dr. José Jacinto Araújo Martins</h1>
              <h4 class="text-center">ENDOCRINOLOGIA E METABOLOGIA</h4>
              <h4 class="text-center">CRM 19.018</h4>
            </div>
            <div class="card-body">
                <h2 style="font-size: 1.5rem">Nome do Paciente: {{Receita.NomeCliente}}</h2>
                <h2 style="font-size: 1.5rem">Data: {{Receita.Data}}</h2>
                <h1 class="text-center">
                  Receituário
                </h1>
                <div class="area-prescricao" style="font-family: Courier new">
                <ul class="lista-receita" style="list-style: none" v-for="(lista, index) in Receita.ListaReceita" :key="index">
                  <li class="lista-receita-item">
                    <span class="badge badge-light">{{index + 1}} </span>
                     {{lista.NomeItem}} {{lista.Quantidade}}
                    
                    <br />
                    <span class="observacao">Observação: {{lista.Descricao}}</span>
                  </li>
                  <!-- <li class="lista-receita-item">
                    2 - Piemont ou Viatine 10mg - 90 dias
                    <br />
                    <span class="observacao">Observação: tomar 1 cp. anoite.</span>
                  </li> -->
                </ul>
              </div>
            </div>
            <div class="card-footer" style="visibility: hidden; position: fixed; bottom: 0; left:0; right:0; text-align: center">
              <h5 class="text-center">Rua Barão do Rio Branco, 681 - SALA 1006 - Centro - Ed. Climério Vieira</h5>
              <h5 class="text-center">Fone: (33) 3271-7394 / 99803-7394 - Governador Valadares - Minas Gerais</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <div class="modal fade" :class="{show: ShowModal}" :style="{display: ShowModal ? 'block': 'none'}" >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Impressão de Receita!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Deseja imprimir?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="OcultarModal()"><i class="fa fa-times-circle"></i> Fechar</button>
            <button type="button" class="btn btn-primary" @click="Imprimir()"><i class="fa fa-print"></i> Imprimir</button>
          </div>
        </div>
      </div>
    </div>
      <div class="modal-backdrop fade" :class="{show: ShowModal}" :style="{display: ShowModal ? 'block' : 'none'}"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      print: false,
      ShowModal: false,
      Receita: {
        NomeCliente: '',
        ListaReceita: [],
        Data: ''
      }
    };
  },
  computed: {
    ...mapGetters(["GetReceitaInfo"]),
    
  },
  methods: {
    
    OcultarModal() {
      this.ShowModal = false;
    },
    MostrarModal() {
      this.ShowModal = true;
    },
    Imprimir() {
      this.OcultarModal();
      window.print();
    },
    CarregarInfo(dados){
      let receita = this.GetReceitaInfo(dados)
      this.Receita = {
        NomeCliente: receita.NomeCliente,
        ListaReceita: receita.ListaReceita,
        Data: receita.Data
      }
    }
  },
  created() {
    this.$root.$on("ModalPrint::show", (ReceitaItens) => {
      this.MostrarModal();
      this.CarregarInfo(ReceitaItens)
      /* console.log(this.GetReceitaInfo(ReceitaItens)) */
    });
    this.$root.$on("ModalPrint::hide", () => {
      this.OcultarModal();
    });
  }
};
</script>
<style lang="css" scoped>
.impressao{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #808080;
    opacity: 1;
    display: none;
}
.container{
  background-color: white;
  z-index: 1000000;
  opacity: 1;
  border-radius: 0.25px;
  height: 100%;
}
.card, .card-header, .card-body, .card-footer{
  border: none;
  background-color: transparent;
}
@media (max-width: 968px) {
  h5{
    font-size: 0.8rem;
  }
}
@media print {
  .lista-receita {
    padding: 0;
  }
  .lista-receita-item {
    font-size: 1.5em;
  }
  .impressao{
    display: block;
    z-index: 10000000000000;
  }
  .modal{
    visibility: hidden;
  }
  h5{
    font-size: 1.25rem;
  }
  body{
    visibility: hidden;
  }
  .impressao{
    opacity: 1;
  }
}
</style>