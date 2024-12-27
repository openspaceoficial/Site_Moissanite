function loadProducts() {
    const products = JSON.parse(sessionStorage.getItem('products')) || [];
    const productsContainer = document.getElementById('productsContainer');

    productsContainer.innerHTML = '';

    products.forEach((product) => {
        const productRow = document.createElement('div');
        productRow.classList.add('product-row');
        productRow.innerHTML = `
             <div class="editable" contenteditable="true"> ${product.category}</div>
             <div class="editable" contenteditable="true"> ${product.size} MM</div>
             <div class="editable" contenteditable="true"> ${product.quantidade}</div>
             <div class="editable" contenteditable="true"> ${product.quilate}</div>
             <div class="editable" contenteditable="true"> ${product.valor}</div>
             <button class="delete-button" onclick="excluir(this)">Excluir</button>
        `;
        productsContainer.appendChild(productRow);
    });
}


function excluir(button) {
    // Encontre a linha da tabela
    const row = button.parentElement;
    
    // Remova a linha do DOM
    row.remove();
    
    // Se desejar também remover os dados do localStorage ou atualizar as informações, você pode fazer isso aqui
    // Exemplo: Remover um item do localStorage por chave
    // localStorage.removeItem("Assunto");
    // localStorage.removeItem("Parcela");
    // localStorage.removeItem("Data");
    // localStorage.removeItem("Pagamento");
    // localStorage.removeItem("Preco");
    // localStorage.removeItem("precoParcelas");

    // Alternativamente, se os dados estiverem armazenados de uma forma mais estruturada (como um array ou objeto), você pode reatualizar o localStorage.
}


// Zircônia!!!!!!!!!!!!!
function loadProductsZirconia() {
    const products = JSON.parse(sessionStorage.getItem('productsZ')) || [];
    const productsContainer = document.getElementById('productsContainerZirconia');

    productsContainer.innerHTML = '';

    products.forEach((product) => {
        const productRow = document.createElement('div');
        productRow.classList.add('product-row');
        productRow.innerHTML = `
             <div id="formatoZ"> ${product.category}</div>
             <div id="tamanhoZ"> ${product.size} MM</div>
             <div id="quantidadeZ"> ${product.quantidade}</div>
             <div id="corZ"> ${product.cor}</div>
             <div id="valorZ"> ${product.valor}</div>
            <button class="delete-button" onclick="excluir(this)">Excluir</button>
        `;
        productsContainer.appendChild(productRow);
    });
}

// Função para adicionar novos produtos a uma lista específica
function addProduct(product, storageKey, containerId) {
    const currentProducts = JSON.parse(sessionStorage.getItem(storageKey)) || [];
    currentProducts.push(product); // Adiciona o novo produto
    sessionStorage.setItem(storageKey, JSON.stringify(currentProducts)); // Atualiza o armazenamento

    // Atualiza a interface
    if (storageKey === 'products') {
        loadProducts(); // Atualiza o contêiner Moissanite
    } else if (storageKey === 'productsZ') {
        loadProductsZirconia(); // Atualiza o contêiner Zircônia
    }
}

// Evento acionado quando a página carregar
document.addEventListener("DOMContentLoaded", function () {
    loadProducts();        // Carrega os produtos Moissanite
    loadProductsZirconia(); // Carrega os produtos Zircônia
});









// Drop menu
document.querySelector(".dropbtn").addEventListener("click", function () {
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("show");
});

// Fecha o dropdown se o usuário clicar fora dele
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.querySelectorAll(".dropdown-content");
        dropdowns.forEach(function (dropdown) {
            if (dropdown.style.display === "block") {
                dropdown.style.display = "none";
            }
        });
    }
};

// Adiciona o evento de clique aos links
var links = document.querySelectorAll(".dropdown-content a");

//menu lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu-icon');

    // Alterna a classe "open" no menu e no ícone
    sidebar.style.right = sidebar.style.right === '0px' ? '-250px' : '0px';
    menuIcon.classList.toggle('open');

}





// Passar os valores do orçamento para o histórico

function addProductHistorico() {
    const product = {
        // tipo: document.getElementById('Joia').value,
        quantidade: document.getElementById('quantidade').value,
        size: document.getElementById('size').value,
        category: document.getElementById('category').value,
        quilate: document.getElementById('quilate').value,
        valor: calcularValor(document.getElementById('size').value, document.getElementById('quantidade').value)
    };

    //Adiciona o produto no sessionStorage
    let products = JSON.parse(sessionStorage.getItem('products')) || [];
    products.push(product);
    sessionStorage.setItem('products', JSON.stringify(products));

    // Atualiza o contêiner com o novo produto
    const productsContainer = document.getElementById('productsContainer');
    const productRow = document.createElement('div');
    productRow.classList.add('product-row'); // Classe para estilização
    productRow.innerHTML = `

        <div> ${product.category}</div>
        <div> ${product.size} MM</div>
        <div> ${product.quantidade}</div>
        <div> ${product.quilate}</div>
        <div> ${product.valor.toFixed(2)}</div>
        `;

    productRow.style.display = "grid";
    productRow.style.gridTemplateColumns = "repeat(5, 1fr)";
    productRow.style.gridTemplateRows = "repeat(8, 1fr)";
    productRow.style.justifyContent = "center";
    productRow.style.marginLeft = "15%";

    function calcularValor(size, quantidade) {
        const valorBase = 10; // Valor base por milímetro
        return size * valorBase * quantidade;
    }

    // // Salvando no sessionStorage
    sessionStorage.setItem('product', JSON.stringify(productRow));

    // // Redireciona para a página de orçamento
    // window.location.href = '../orcamento/orcamento.html';
    window.location.href = '../orcamento/orcamento.html';
} 