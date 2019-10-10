<template>
  <div>
    <div class="modal fade " :class="{show: ShowModal}" :style="{display: ShowModal ? 'block': 'none'}">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLiveLabel">{{GetLogin.displayName}}</h5>
            <button type="button" class="close" aria-label="Close" @click="OcultarModal()">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">
            <!-- <p>Woohoo, you're reading this text in a modal!</p> -->
            <div class="form-group">
                <!-- <p><label for="">Nome de usuário:</label> fulano.tal</p>
                <p><label for="">Telefone:</label> (33) 9 9999-9999</p> -->
                <p><label for="">E-mail:</label> {{GetLogin.email}}</p>
                <div class="card" v-if="AlterarSenha">
                    <div class="card-header">
                        Alterar Senha
                    </div>
                    <div class="card-body">
                        <input type="password" class="form-control" placeholder="Senha Atual" v-model="senhaAtual">
                    <input type="password" class="form-control" placeholder="Nova Senha" v-model="newSenha">
                    <input type="password" class="form-control" placeholder="Confirmar Nova Senha" v-model="confirmSenha">
                    </div>
                    <div class="card-footer text-center">
                        <button  @click="ModificarSenha()" class="btn btn-primary">Confirmar Alteração</button>
                    </div>
                </div>
            </div>
            <div class="senha" v-if="!AlterarSenha">
                <button disabled="disabled" @click="ActionAlterarSenha()" style="margin-left: -5px" class="btn btn-warning">Alterar Senha</button>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="OcultarModal()">
              <i class="fa fa-times-circle"></i> Fechar
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
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      ShowModal: false,
      AlterarSenha: false,
      senhaAtual : '',
      newSenha : '',
      confirmSenha: ''
    };
  },
  computed: {
    ...mapGetters(["GetLogin"])
  },
  methods: {
    ...mapActions(["Logout"]),
    ActionAlterarSenha(){
        this.AlterarSenha = !this.AlterarSenha
    },
    OcultarModal() {
      this.ShowModal = false;
    },
    MostrarModal() {
      this.ShowModal = true;
    },
  },
  created() {
    this.$root.$on("ModalViewUsuario::show", () => {
      this.MostrarModal();
    });
    this.$root.$on("ModalViewUsuario::hide", () => {
      this.OcultarModal();
    });
  }
};
</script>
<style lang="sass" scoped>

</style>