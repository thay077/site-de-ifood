let carrinho = [];

function mostrarRestaurantes() {
    const sectionRestaurantes = document.getElementById("restaurantes");
    sectionRestaurantes.style.display = 'block';
}

function verCardapio(restauranteId) {
    const cardapioDiv = document.getElementById(`cardapio-${restauranteId}`);
    cardapioDiv.style.display = cardapioDiv.style.display === 'none' ? 'block' : 'none';
}

function adicionarAoCarrinho(item) {
    carrinho.push(item);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById("lista-carrinho");
    carrinhoLista.innerHTML = '';
    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        carrinhoLista.appendChild(li);
    });
}

function finalizarPedido() {
    if (carrinho.length === 0) {
        alert("O carrinho está vazio!");
    } else {
        alert("Pedido finalizado com sucesso!");
        carrinho = [];
        atualizarCarrinho();
    }
}
