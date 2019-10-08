<template>
  <div class="side-bar">
    <h1 class="text-center titulo-logo">MLM SISTEMAS</h1>
    <div class="menu">
      <ul class="menu-lista">
          
        <!-- <li class="menu-lista-item">
          <a href="#" class="link">
            <i class="fas fa-home"></i> <span class="item-li">Página Inicial</span>
          </a>
        </li> -->
        <router-link class="menu-lista-item" to="/nova_receita" tag="li" replace active-class="ativo">
          <a class="link">
            <i class="fas fa-plus-circle"></i> <span class="item-li">Nova Receita</span>
          </a>
        </router-link>
        <router-link class="menu-lista-item" to="/receitas" tag="li" replace active-class="ativo">
          <a class="link">
            <i class="fas fa-list-alt"></i> <span class="item-li">Relação de Receitas</span>
          </a>
        </router-link>
        <router-link class="menu-lista-item" to="/usuarios" tag="li" replace active-class="ativo">
          <a class="link">
            <i class="fas fa-user"></i> <span class="item-li">Usuários do Sistema</span>
          </a>
        </router-link>
        <router-link class="menu-lista-item" to="/login" tag="li" replace active-class="ativo">
          <a class="link">
            <i class="fas fa-sign-out-alt"></i> <span class="item-li">Sair</span>
          </a>
        </router-link>
      </ul>
    </div>
  </div>
</template>