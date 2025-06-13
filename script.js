document.addEventListener('DOMContentLoaded', function() {
    // Inicializa o cardápio com opções padrão
    let pratos = {
        pizzaria: ['Pizza Margherita', 'Pizza Calabresa', 'Pizza Portuguesa'],
        sushi: ['Sushi Roll', 'Sashimi de Salmão', 'Temaki'],
        hamburgueria: ['Cheese Burger', 'Bacon Burger', 'Veggie Burger']
    };

    let selectPrato = document.getElementById('prato');
    let selectRestaurante = document.getElementById('restaurante');
    
    // Função para atualizar as opções do prato
    function atualizarCardapio() {
        let restauranteEscolhido = selectRestaurante.value;
        let pratosDisponiveis = pratos[restauranteEscolhido];

        // Limpa o select de pratos
        selectPrato.innerHTML = '';

        // Adiciona as opções de pratos
        pratosDisponiveis.forEach(function(prato) {
            let option = document.createElement('option');
            option.value = prato.toLowerCase().replace(' ', '-');
            option.textContent = prato;
            selectPrato.appendChild(option);
        });
    }

    // Atualiza o cardápio inicial
    atualizarCardapio();

    // Adiciona evento de mudança no restaurante
    selectRestaurante.addEventListener('change', function() {
        atualizarCardapio();
    });

    // Validação do formulário antes de enviar
    document.getElementById('form-pedido').addEventListener('submit', function(e) {
        e.preventDefault();

        let restaurante = selectRestaurante.value;
        let prato = selectPrato.value;
        let quantidade = document.getElementById('quantidade').value;

        if (quantidade < 1) {
            alert('Por favor, insira uma quantidade válida!');
            return;
        }

        alert(`Pedido confirmado! ${quantidade}x de ${prato} do restaurante ${restaurante}.`);
    });
});
