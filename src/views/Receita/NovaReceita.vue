<template>
  <div class="content-bar">
    <h1 class="text-center" style="margin: 50px">Nova Receita</h1>
    <form action>
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Nome do Cliente" />
      </div>
      <div class="form-group">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Item</th>
              <th>Dosagem</th>
              <th>Tipo de Uso</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Anador</td>
              <td>1 comprimido</td>
              <td>Oral</td>
              <td>
                <button class="btn btn-danger">
                  <i class="fas fa-window-close"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Anador</td>
              <td>1 comprimido</td>
              <td>Oral</td>
              <td>
                <button class="btn btn-danger">
                  <i class="fas fa-window-close"></i>
                </button>
              </td>
            </tr>
            <tr>
              <td>Anador</td>
              <td>1 comprimido</td>
              <td>Oral</td>
              <td>
                <button class="btn btn-danger">
                  <i class="fas fa-window-close"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-primary">
          <i class="fas fa-plus-circle"></i> Adicionar Item
        </button>
      </div>
      <div class="grupo-botoes">
        <button class="btn btn-sucesso">
          <i class="fas fa-check-circle"></i> Gravar Dados
        </button>
        <button class="btn btn-cancelar">
          <i class="fas fa-ban"></i> Cancelar
        </button>
      </div>
    </form>
  </div>
</template>