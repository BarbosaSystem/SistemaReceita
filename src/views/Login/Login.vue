<template>
  <div class="login">
    <div class="">
      <h1 class="login-titulo">Sistema de Receita</h1>
      <h3 class="login-titulo">Acessar Sistema</h3>
      <div class="login-box">
          <input type="text" class="form-control">
          <input type="text" class="form-control">
          <router-link to="/Recover" class="link"> Esqueceu a Senha?</router-link>
          <button class="btn btn-primary" @click="Logar()" :disabled="Loading">
              
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
    <!-- <div class="rodape">
        <h1 class="titulo-rodape">MLM Sistemas - 2019</h1>
    </div> -->
  </div>
</template>
<script>
export default {
    data(){
        return {
            Loading: false
        }
    },
    methods: {
        Logar(){
            /* this.Loading = !this.Loading
            if(this.Loading){
                setTimeout(() => {
                    this.$root.$emit("Spinner::show")
                }, 500);
                this.$root.$emit("Spinner::hide")
            } */
        }
    }
}
</script>
<style lang="scss">

</style>