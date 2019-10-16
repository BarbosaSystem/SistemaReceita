<template>
  <div class="login">
    <div class="login-box">
          <div class="card">
              <div class="card-header text-center">
                    <h1 class="login-titulo">Sistema de Receita</h1>
                    <h3 class="login-titulo">Acessar Sistema</h3>
              </div>
              <div class="card-body">
                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="E-mail" required v-model="email">
                  </div>
                  <div class="form-group">
                      <input type="password" class="form-control" placeholder="Senha" required v-model="password">
                  </div>
                  <div class="form-group">
                      <router-link to="/Recover" class="link"> Esqueceu a Senha?</router-link>
                  </div>
              </div>
              <div class="card-footer">
                  <button class="btn btn-block btn-primary" @click="Logar()" :disabled="Loading">
                    <template v-if="Loading">
                        <i class="fas fa-spinner fa-spin"></i>
                        <span> Aguarde...</span>
                    </template>
                    <template v-else>
                        <i class="fas fa-check-circle"></i> 
                        <span> Acessar</span>
                    </template>
                </button>
              </div>
          </div>
      </div>
    <!-- <div class="rodape">
        <h1 class="titulo-rodape">MLM Sistemas - 2019</h1>
    </div> -->
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    computed: {
        ...mapGetters(["GetLogin"])
    },
    created() {
    if (this.GetLogin) {
      this.$router.push("/receitas");
    }
  },
    data(){
        return {
            Loading: false,
            email: 'leobo@hotmail.com',
            password: 'comandos'
        }
    },
    methods: {
        ...mapActions(["AdicionarLogin"]),
        async Logar(){
            this.Loading = true
            this.$root.$emit("Spinner::show");
            const { email, password } = this;
            await this.$firebase.auth().signInWithEmailAndPassword(email, password).then( user => {
                //State com as informações do usuário
                let usuario = {
                    uid: user.user.uid,
                    displayName: user.user.displayName,
                    email: user.user.email,
                    photoURL: user.user.photoURL,
                    phoneNumber: user.user.phoneNumber
                };

                this.AdicionarLogin(usuario)
            }).catch(function(error) {
                if(error.code == 'auth/wrong-password'){
                    alert("Nome de usuário e ou Senha inválidos. Tente novamente!")
                }
            })
            this.Loading = false
            this.$root.$emit("Spinner::hide");
        }
    }
}
</script>
<style lang="css">
    .login{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>