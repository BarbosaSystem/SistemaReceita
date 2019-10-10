<template>
  <div class="content-bar">
    <h1 class="text-center titulo">{{GetLogin.displayName}}</h1>
    <div class="form-group">
      <div class="text-center">
        <button class="btn btn-primary" @click="AbrirMostrarInfoUsuario()"><i class="fas fa-eye"></i> Visualizar Informações</button>
      </div>
      <!--<table class="table table-bordered">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Nome de Usuário</th>
            <th>Status</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fulana de Tal</td>
            <td>fulano.tal</td>
            <td>
              <input type="checkbox" name id checked />
            </td>
            <td class="opcoes">
              <button class="btn btn-warning" @click="AbrirMostrarNovoUsuario()">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-primary" @click="AbrirMostrarInfoUsuario()">
                <i class="fas fa-search"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
         <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Próximo</a></li>
            </ul>
        </nav> 
      <div class="form-group">
        <button class="btn btn-primary" @click="AbrirMostrarNovoUsuario()">
          <i class="fa fa-user-plus"></i> Adicionar Usuário
        </button>
      </div>
      <usuario-new />-->
      <usuario-view />
    </div>
 
  </div>
</template>
<script>
/* import UsuarioNew from "../../components/Modal/Usuarios/ModalNewUsuario"; */
import UsuarioView from "../../components/Modal/Usuarios/ModalViewUsuario"
import { mapGetters } from 'vuex';
export default {
  components: {
    UsuarioView
  },
  computed: {
    ...mapGetters(["GetLogin"])
  },
  methods: {
    AbrirMostrarNovoUsuario() {
      this.$root.$emit("ModalNewUser::show");
    },
    AbrirMostrarInfoUsuario() {
      this.$root.$emit("ModalViewUsuario::show");
    }
  }
};
</script>