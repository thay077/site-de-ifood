let carrinho = [];

function mostrarRestaurantes() {
    document.getElementById('restaurantes').style.display = 'block';
    document.getElementById('intro').style.display = 'none';
}

function mostrarCardapio(restauranteId) {
    let itens = [];
    if (restauranteId === 'pizzaria') {
        itens = ['Pizza Margherita', 'Pizza Calabresa', 'Pizza Portuguesa'];
    } else if (restauranteId === 'sushi') {
        itens = ['Sushi Roll', 'Sashimi de Salmão', 'Temaki'];
    } else if (restauranteId === 'hamburgueria') {
        itens = ['Cheese Burger', 'Bacon Burger', 'Veggie Burger'];
    }

    const ul = document.getElementById('itens-cardapio');
    ul.innerHTML = '';  // Limpa os itens do cardápio

    itens.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        const button = document.createElement('button');
        button.textContent = 'Adicionar ao Carrinho';
        button.onclick = () => adicionarAoCarrinho(item);
        li.appendChild(button);
        ul.appendChild(li);
    });

    document.getElementById('restaurantes').style.display = 'none';
    document.getElementById('cardapio').style.display = 'block';
}

function voltarRestaurantes() {
    document.getElementById('cardapio').style.display = 'none';
    document.getElementById('restaurantes').style.display = 'block';
}

function adicionarAoCarrinho(item) {
    carrinho.push(item);
    atualizarCarrinho();
    mostrarNotificacao();
}

function atualizarCarrinho() {
    const carrinhoLista = document.getElementById('lista-carrinho');
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

function mostrarNotificacao() {
    const notificacao = document.getElementById('notificacao');
    notificacao.style.display = 'block';
    setTimeout(() => {
        notificacao.style.display = 'none';
    }, 2000);
}
