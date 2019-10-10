<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <!--  <router-view/> -->
    <!-- <login v-if="false" /> -->
    <spinner />
    <div class="conteudo">
      <sidebar />
      <!-- <content-bar /> -->
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
/* import Login from "./views/Login/Login"; */
import Spinner from "./components/Spinner/spinner"
/* import ContentBar from "./Layout/ContentBar" */
import sidebar from "./Layout/SideBar"
import { mapActions } from "vuex";
export default {
  components: {
    Spinner, sidebar
  },
  methods: {
    ...mapActions(["Reconectar"])
  },
  computed: {
    
  },
  mounted() {
    this.$firebase.auth().onAuthStateChanged(user => {
      this.$root.$emit('Spinner::show')
      window.uid = user ? user.uid : null
      if(user){
        this.$store.dispatch("Reconectar", user)
        /* this.$store.dispatch("Reconectar", user) */
        this.$router.push("/nova_receita");
      }
      setTimeout(() => {
        this.$root.$emit('Spinner::hide')
      }, 2000);
    });
  }
};
</script>
<style lang="scss">
/*#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100%;
}
 #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
