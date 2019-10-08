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
          <tr>
            <td>Fulana de Tal</td>
            <td>20/09/2019</td>
            <td class="opcoes">
              <button class="btn btn-primary" @click="AbrirModalMostrarReceita()">
                <i class="fas fa-search"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>Fulana de Tal</td>
            <td>20/09/2019</td>
            <td class="opcoes">
              <button class="btn btn-primary" @click="AbrirModalMostrarReceita()">
                <i class="fas fa-search"></i>
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

export default {
  components: {
    ReceitaViewer, ReceitaPrint
  },
  methods: {
    AbrirModalMostrarReceita(){
      this.$root.$emit("ModalViewReceita::show")
    }
  }
}
</script>