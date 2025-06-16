// Lista de restaurantes fictícios
const restaurantes = [
    { nome: "Restaurante A", descricao: "Comida deliciosa a um preço ótimo.", imagem: "https://via.placeholder.com/250x150?text=Restaurante+A" },
    { nome: "Restaurante B", descricao: "Comida rápida e saborosa.", imagem: "https://via.placeholder.com/250x150?text=Restaurante+B" },
    { nome: "Restaurante C", descricao: "Pratos inovadores e exclusivos.", imagem: "https://via.placeholder.com/250x150?text=Restaurante+C" },
    { nome: "Restaurante D", descricao: "Sabor caseiro, simples e delicioso.", imagem: "https://via.placeholder.com/250x150?text=Restaurante+D" }
];

// Função para exibir os restaurantes na página
function exibirRestaurantes(lista) {
    const container = document.getElementById('restaurantList');
    container.innerHTML = ''; // Limpa os restaurantes antes de adicionar

    lista.forEach(restaurante => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const img = document.createElement('img');
        img.src = restaurante.imagem;
        img.alt = restaurante.nome;

        const nome = document.createElement('h3');
        nome.textContent = restaurante.nome;

        const descricao = document.createElement('p');
        descricao.textContent = restaurante.descricao;

        card.appendChild(img);
        card.appendChild(nome);
        card.appendChild(descricao);

        container.appendChild(card);
    });
}

// Função para filtrar restaurantes com base na pesquisa
function filtrarRestaurantes() {
    const pesquisa = document.getElementById('searchInput').value.toLowerCase();
    const restaurantesFiltrados = restaurantes.filter(restaurante => 
        restaurante.nome.toLowerCase().includes(pesquisa) || 
        restaurante.descricao.toLowerCase().includes(pesquisa)
    );
    exibirRestaurantes(restaurantesFiltrados);
}

// Event listener para a pesquisa
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Impede o envio do formulário
    filtrarRestaurantes();
});

// Exibir todos os restaurantes ao carregar a página
window.onload = function() {
    exibirRestaurantes(restaurantes);
};
