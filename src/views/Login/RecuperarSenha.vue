<template>
<div class="login">
    <div class="login-box">
          <div class="card">
              <div class="card-header text-center">
                    <h1 class="login-titulo">Sistema de Receita</h1>
                    <h3 class="login-titulo">Recuperação de Senha</h3>
              </div>
              <div class="card-body">
                  <div class="form-group">
                      <input type="text" class="form-control" placeholder="E-mail">
                  </div>
              </div>
              <div class="card-footer text-center">
                  <button class="btn btn-primary btn-block" @click="Logar()" :disabled="Loading">
                    <template v-if="Loading">
                        <i class="fas fa-spinner fa-spin"></i>
                        <span> Aguarde...</span>
                    </template>
                    <template v-else>
                        <i class="fas fa-check-circle"></i> 
                        <span> Confirmar Envio</span>
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