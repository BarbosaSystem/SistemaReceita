<template >
  <div class="side-bar" v-if="GetLogin != null">
    <h1 class="text-center titulo-logo">MLM SISTEMAS</h1>
    <div class="menu">
      <ul class="menu-lista">
        <div v-for="menuItem in SELECT_MENU" :key="menuItem.Codigo">
          <router-link class="menu-lista-item" :to="menuItem.Path" tag="li" replace active-class="ativo">
            <a class="link">
              <i class="fa" :class="menuItem.Icon"></i><span class="item-lit"> {{menuItem.Titulo}}</span>
            </a>
          </router-link>
        </div>
        <!-- <router-link class="menu-lista-item" to="/nova_receita" tag="li" replace active-class="ativo">
          <a class="link">
            <i class="fas fa-plus-circle"></i> <span class="item-li">Nova Receita</span>
          </a>
        </router-link>
        <router-link class="menu-lista-item" to="/receitas" tag="li" replace active-class="ativo">
          <a class="link">
            <i class="fas fa-list-alt"></i> <span class="item-li">Relação de Receitas</span>
          </a>
        </router-link>
        <router-link class="menu-lista-item" to="/configuracao" tag="li" replace active-class="ativo">
          <a class="link">
            <i class="fas fa-user-cog"></i> <span class="item-li">Configurações do Sistema</span>
          </a>
        </router-link> -->
        <!-- <router-link class="menu-lista-item" to="/configuracao" tag="li" replace active-class="ativo">
          <a class="link">
            <i class="fas fa-cog"></i> <span class="item-li">Configurações</span>
          </a>
        </router-link> -->
        
        <router-link class="menu-lista-item"  to v-on:click.native="Desconectar()" tag="li">
          <a class="link">
            <i class="fas fa-sign-out-alt"></i> <span class="item-li">Sair</span>
          </a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(["GetLogin", "SELECT_MENU"])
  },
  methods: {
    ...mapActions(["Logout"]),
    async Desconectar (){
      this.$root.$emit("Spinner::show");
      await this.$firebase.auth().signOut();
      setTimeout(() => {
        this.Logout();
        /* this.$router.push({ name: "login" }); */
        this.$router.push("/login");
        this.$root.$emit("Spinner::hide");
      }, 500);
      
    }
  }
}
</script>