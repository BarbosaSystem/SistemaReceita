<template>
  <div class="content-bar">
    <h1 class="text-center" style="margin: 50px">Relação de Receitas</h1>
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
      
    </div>
  </div>
</template>
<script>
import ReceitaViewer from '../../components/Modal/Receitas/ModalViewReceita'

export default {
  components: {
    ReceitaViewer
  },
  methods: {
    AbrirModalMostrarReceita(){
      this.$root.$emit("ModalViewReceita::show")
    }
  }
}
</script>