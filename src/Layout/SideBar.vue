<template>
  <div class="side-bar">
    <h1 class="text-center titulo-logo">SideBar</h1>
    <div class="menu">
      <ul class="menu-lista">
          
        <li class="menu-lista-item">
          <a href="#" class="link">
            <i class="fas fa-home"></i> Página Inicial
          </a>
        </li>
        <router-link class="menu-lista-item" to="/nova_receita" tag="li" replace active-class="ativo">
          <a class="link">
            <i class="fas fa-plus-circle"></i> Nova Receita
          </a>
        </router-link>
        <router-link class="menu-lista-item" to="/receitas" tag="li" replace active-class="ativo">
          <a class="link">
            <i class="fas fa-list-alt"></i> Relação de Receitas
          </a>
        </router-link>
        <router-link class="menu-lista-item" to="/usuarios" tag="li" replace active-class="ativo">
          <a class="link">
            <i class="fas fa-user"></i> Usuários do Sistema
          </a>
        </router-link>
        <router-link class="menu-lista-item" to="/logout" tag="li" replace active-class="ativo">
          <a class="link">
            <i class="fas fa-sign-out-alt"></i> Sair
          </a>
        </router-link>
      </ul>
    </div>
  </div>
</template>