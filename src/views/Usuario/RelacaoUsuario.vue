<template>
  <div class="content-bar">
    <h1 class="text-center titulo">{{GetLogin.displayName}}</h1>
    <div class="form-group">
      <div class="text-center">
        
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
    <div class="card">
      <div class="card-header text-center">
        CONFIGURAÇÕES GERAIS DE SISTEMA
      </div>
      <div class="card-body">
        <div class="form-group">
          <h5 class="card-title">E-mail: </h5>
          <div class="custom-control custom-switch">
            <input @change="Cabecalho()" type="checkbox" class="custom-control-input" id="customSwitch1" v-model="MostrarCabecalho">
            <label class="custom-control-label" for="customSwitch1">Exibir cabeçalho e rodapé nas impressões?</label>
          </div>
          <button class="btn btn-primary my-3" @click="AbrirMostrarInfoUsuario()"><i class="fas fa-key"></i> Alterar Senha</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* import UsuarioNew from "../../components/Modal/Usuarios/ModalNewUsuario"; */
import UsuarioView from "../../components/Modal/Usuarios/ModalViewUsuario"
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      MostrarCabecalho: false
    }
  },
  components: {
    UsuarioView
  },
  computed: {
    ...mapGetters(["GetLogin"])
  },
  created() {
    this.CarregarConfiguracao()
  },
  methods: {
    ...mapActions(["ActionAlterarCabecalho"]),
    async Cabecalho(){
      var vm = this
      if(this.MostrarCabecalho){
        if(confirm("Deseja dabilitar a exibição do cabeçalho e rodapé?")){
          await this.$firebase.database().ref('ConfiguraçõesGerais/Mostrar-Cabecalho/').set(this.MostrarCabecalho).then( () => {
            vm.ActionAlterarCabecalho(this.MostrarCabecalho)
            alert("Alteração realizada com sucesso")
          })
        }
      }else{
        if(confirm("Deseja desabitar a exibição do cabeçalho e rodapé?")){
          await this.$firebase.database().ref('ConfiguraçõesGerais/Mostrar-Cabecalho/').set(this.MostrarCabecalho).then( () => {
            vm.ActionAlterarCabecalho(this.MostrarCabecalho)
            alert("Alteração realizada com sucesso")
          })
        }
      }
    },
    async CarregarConfiguracao (){
      this.$root.$emit("Spinner::show");
      await this.$firebase.database().ref('ConfiguraçõesGerais/Mostrar-Cabecalho/').once('value')
        .then((data) => {
          this.MostrarCabecalho = data.val()
        })
      setTimeout(() => {
        this.$root.$emit("Spinner::hide");
      }, 900);
    },
    AbrirMostrarNovoUsuario() {
      this.$root.$emit("ModalNewUser::show");
    },
    AbrirMostrarInfoUsuario() {
      this.$root.$emit("ModalViewUsuario::show");
    }
  }
};
</script>