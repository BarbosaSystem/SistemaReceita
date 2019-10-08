<template>
  <div class="content-bar">
    <h1 class="text-center titulo">Nova Receita</h1>
    <div class="form-group">
        <input type="text" class="form-control" placeholder="Nome do Cliente" />
      </div>
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
            <tr>
              <td>Anador</td>
              <td>1 comprimido</td>
              <td>Oral</td>
              <td class="opcoes">
                <button class="btn btn-danger">
                  <i class="fas fa-window-close"></i>
                </button>
              </td>
            </tr>
            <tr >
              <td>Anador</td>
              <td>1 comprimido</td>
              <td>Oral</td>
              <td class="opcoes">
                <button class="btn btn-danger">
                  <i class="fas fa-window-close"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Anador</td>
              <td>1 comprimido</td>
              <td>Oral</td>
              <td class="opcoes">
                <button class="btn btn-danger">
                  <i class="fas fa-window-close"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-primary" type="button" @click="AbrirModalNovaReceita()">
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
export default {
  components: {
    ModalNovo, ReceitaPrint
  },
  methods: {
    AbrirModalNovaReceita(){
      this.$root.$emit("ModalNewReceita::show")
    },
     Imprimir(){
      this.$root.$emit("ModalPrint::show");
    }
  }
}
</script>