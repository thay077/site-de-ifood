// Adiciona o efeito de scroll no cabeçalho
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Função para mostrar os restaurantes
function mostrarRestaurantes() {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('#restaurantes').style.display = 'flex';
}

// Função para voltar para a lista de restaurantes
function voltarRestaurantes() {
    document.querySelector('#restaurantes').style.display = 'none';
    document.querySelector('#cardapio').style.display = 'none';
    document.querySelector('.intro').style.display = 'flex';
}

// Função para mostrar o cardápio dos restaurantes
function mostrarCardapio(restaurante) {
    const cardapioSection = document.querySelector('#cardapio');
    const itensCardapio = document.querySelector('#itens-cardapio');
    
    let itens = [];
    if (restaurante === 'pizzaria') {
        itens = ['Pizza Margherita', 'Pizza Calabresa', 'Pizza de Quatro Queijos'];
    } else if (restaurante === 'sushi') {
        itens = ['Sushi de Salmão', 'Sushi de Atum', 'Sushi Vegano'];
    } else if (restaurante === 'hamburgueria') {
        itens = ['Hambúrguer Clássico', 'Cheeseburger', 'Hambúrguer Vegano'];
    }
    
    itensCardapio.innerHTML = '';
    itens.forEach(item => {
        itensCardapio.innerHTML += `<li>${item} <button onclick="adicionarAoCarrinho('${item}')">Adicionar</button></li>`;
    });

    cardapioSection.style.display = 'block';
    document.querySelector('#restaurantes').style.display = 'none';
}

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(item) {
    const carrinho = document.querySelector('#lista-carrinho');
    carrinho.innerHTML += `<li>${item}</li>`;
    
    // Exibe a notificação
    const notificacao = document.querySelector('#notificacao');
    notificacao.style.display = 'block';
    setTimeout(() => {
        notificacao.style.display = 'none';
    }, 2000);
}

// Função para finalizar o pedido
function finalizarPedido() {
    alert('Pedido Finalizado! Agradecemos!');
}
