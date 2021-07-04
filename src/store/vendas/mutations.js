export function addVenda(state, venda) {
  state.vendas.push(venda);
}

export function deleteVenda(state, vendaId) {
  state.vendas.forEach((venda, index) => {
    if (venda.id === vendaId) {
      state.vendas.splice(index, 1);
    }
  })
}

