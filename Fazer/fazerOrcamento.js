// Adici     a o evento de clique aos links
var links = document.querySelectorAll(".dropdown-content a");

links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação

        // Pega o valor armazenado no atributo data-valor
        var valorSelecionado = link.getAttribute("data-valor");

        // Exibe o valor selecionado no elemento da página
        document.getElementById("milimetro_alteravel").textContent = valorSelecionado;
    });
});






// --------------------------- menu lateral
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu-icon');

    // Alterna a classe "open" no menu e no ícone
    sidebar.style.right = sidebar.style.right === '0px' ? '-250px' : '0px';
    menuIcon.classList.toggle('open');
}








// ----------------------------------------- Drop menu
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



// function limpar() {
//     document.getElementById("Joia").value = " "
//     document.getElementById("color").value = " "
//     document.getElementById("category").value = " "
//     document.getElementById("size").value = " "
// }







// ---------------------------------- Pagina 1 

function showPreview() { /*corPreview */
    const radioM = document.getElementById('radioMoissanite');
    const radioZ = document.getElementById('radioZirconia');

    if (radioM.checked) {
        document.getElementById('tipoJoiaPreview').textContent = radioM.value;
    } else {
        document.getElementById('tipoJoiaPreview').textContent = radioZ.value;
    }


    document.getElementById('corPreview').textContent = document.getElementById('color').value;
    document.getElementById('quantidadePreview').textContent = document.getElementById('quantidade').value;
    document.getElementById('sizePreview').textContent = document.getElementById('size').value;
    document.getElementById('categoryPreview').textContent = document.getElementById('category').value;
    document.getElementById('quilatePreview').textContent = document.getElementById('quilate').value;
    document.getElementById('previewCard').style.display = 'block';

    const cor = document.getElementById('color').value;
    const quilate = document.getElementById('quilate').value;
    if (cor === " ") {
        document.getElementById('corPreview').textContent = "Não há cor para Moissanite"
    }
    // colocar para ver o formato escolhido 
    if (quilate === " " || quilate === null || quilate.trim() === "") {
        document.getElementById('quilatePreview').textContent = "Não há quilate para Zirconia"
    }
}


// Card-1


function addProduct() {
    const product = {
        // tipo: document.getElementById('Joia').value,
        quantidade: document.getElementById('quantidade').value,
        size: document.getElementById('size').value,
        category: document.getElementById('category').value,
        quilate: document.getElementById('quilate').value,
        valor: calcularValor(document.getElementById('quantidade').value)
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

    function calcularValor(quantidade) {
        const valorBase = 10; // Valor base por milímetro
        return valorBase * quantidade;
    }

    // // Salvando no sessionStorage
    sessionStorage.setItem('product', JSON.stringify(productRow));

    // // Redireciona para a página de orçamento /
    // window.location.href = '../orcamento/orcamento.html';
    window.location.href = '../orcamento/orcamento.html';
}
// Fim card-1



// Meio termo entre os dois
function verificarValor() {
    const radioM = document.getElementById('radioMoissanite');
    const radioZ = document.getElementById('radioZirconia');

    if (radioM.checked) {
        addProduct();
        localStorage.setItem("valorSelecionado", selecionadoRadio);
    } else if (radioZ.checked) {
        addProductZirconia();
        localStorage.setItem("valorSelecionado", selecionadoRadio);
    }
}



// Card-2

function addProductZirconia() {
    function calcularValor(quantidade) {
        const preco = precos.segundoValor

        return preco * quantidade;

        console.log(preco, quantidade)
    }

    const product = {
        // tipo: document.getElementById('Joia').value,
        quantidade: document.getElementById('quantidade').value,
        size: document.getElementById('size').value,
        category: document.getElementById('category').value,
        cor: document.getElementById('color').value,
        valor: calcularValor(document.getElementById('quantidade').value)
    };

    //Adiciona o produto no sessionStorage
    let products = JSON.parse(sessionStorage.getItem('productsZ')) || []; // Aqui
    products.push(product); //Aqui
    sessionStorage.setItem('productsZ', JSON.stringify(products));

    // Atualiza o contêiner com o novo produto
    const productsContainer = document.getElementById('productsContainerZirconia');
    const productRow = document.createElement('div');
    productRow.classList.add('product-row'); // Classe para estilização
    productRow.innerHTML = `

        <div> ${product.category}</div>
        <div> ${product.size} MM</div>
        <div> ${product.quantidade}</div>
        <div> ${product.cor}</div>
        <div> ${product.valor.toFixed(2)}</div>
        `;

    productRow.style.display = "grid";
    productRow.style.gridTemplateColumns = "repeat(5, 1fr)";
    productRow.style.gridTemplateRows = "repeat(8, 1fr)";
    productRow.style.justifyContent = "center";
    productRow.style.marginLeft = "15%";



    // // Salvando no sessionStorage
    sessionStorage.setItem('product', JSON.stringify(productRow));

    // // Redireciona para a página de orçamento
    // window.location.href = '../orcamento/orcamento.html';
    window.location.href = '../orcamento/orcamento.html';
}



function escondeEaparece() {
    const quilateZirconia = document.getElementById("quilate");
    quilateZirconia.disabled = true;
    quilateZirconia.hidden = true;
}


// --------------------------------- Adicionar número
// Muda o formato conforme a joia
function mudar_formato() {
    const radioM = document.getElementById('radioMoissanite');
    const radioZ = document.getElementById('radioZirconia');
    const tipos = document.getElementById("category");
    const cor = document.getElementById("color");
    const quilateZirconia = document.getElementById("quilate");

    escondeEaparece();

    if (radioM.checked) {
        tipos.innerHTML = `
                <option value=" ">Formato</option>
                <option value="Quadrada (Princess)">Quadrada (Princess)</option>
                <option value="Coração (Heart)">Coração (Heart)</option>
                <option value="Gota (Pear Shape)">Gota (Pear Shape)</option>
                <option value="Navete (Marquise)">Navete (Marquise)</option>
                <option value="Oval">Oval</option>
                <option value="Retangular (Baguette)">Retangular (Baguette)</option>
                <option value="Retângular (Emerald)">Retângular (Emerald)</option>
                <option value="Triângulo (Triangle)">Triângulo (Triangle)</option>
                <option value="Trilion">Trilion</option>
                <option value="Cushion">Cushion</option>
                <option value="Redonda">Redonda</option>
                `;
        cor.disabled = true
        cor.hidden = true


    } else if (radioZ.checked) {
        tipos.innerHTML = `
        <option value=" ">Formato</option>
        <option value="Coração (Heart)">Coração (Heart)</option>
        <option value="Gota (Pear Shape)">Gota (Pear Shape)</option>
        <option value="Navete (Marquise)">Navete (Marquise)</option>
        <option value="Oval">Oval</option>
        <option value="Retangular (Baguette)">Retangular (Baguette)</option>
        <option value="Retângular (Emerald)">Retângular (Emerald)</option>
        <option value="Redonda">Redonda</option>
        `;


        cor.disabled = false
        cor.hidden = false



    }

    if (quilateZirconia.disabled) {
        document.getElementById("quilatePreview").textContent = "Não há"
    }
    else {
        document.getElementById('corPreview').textContent = "Não há"
    }

}

function precos() {
    let select = document.getElementById("size");
    let selectedValue = select.value;
    let valores = selectedValue.split("/");
    let segundoValor = valores[1];
    console.log(segundoValor);
}



// Muda o MM conforme o formato
function adicionar_numeros() {
    const formatos = document.getElementById("category");
    const valorSelecionado = formatos.value;
    const milimetros = document.getElementById("size");
    const quilateZirconia = document.getElementById("quilate");

    if (valorSelecionado === "Oval") {
        milimetros.innerHTML = `
        <option value=" ">Milímetro</option>
        <option value="3x5 / 30">3x5</option>
        <option value="4x6">4x6</option>
        <option value="5x7">5x7</option>
        <option value="6x8">6x8</option>
        <option value="7x9">7x9</option>
        <option value="8x10">8x10</option>
        <option value="9x11">9x11</option>
                `;

        escondeEaparece();
    } else if (valorSelecionado === "Quadrada (Princess)") {
        milimetros.innerHTML = `
        <option value=" ">Milímetro</option>
            <option value="1,5x1,5">1,5x1,5</option>
            <option value="2x2">2x2</option>
            <option value="3x3">3x3</option>
            <option value="4x4">4x4</option>
            <option value="5X5">5X5</option>
            <option value="6x6">6x6</option>
            <option value="6,5x6,5">6,5x6,5</option>
            <option value="7X7">7X7</option>
            <option value="8x8">8x8</option>
                `;

        escondeEaparece();
    } else if (valorSelecionado === "Coração (Heart)") {
        milimetros.innerHTML = `
        <option value=" ">Milímetro</option>
            <option value="3x3">3x3</option>
            <option value="4x4">4x4</option>
            <option value="5x5">5x5</option>
            <option value="6x6">6x6</option>
            <option value="7x7">7x7</option>
            <option value="8x8">8x8</option>
            <option value="9x9">9x9</option>
            <option value="10x10">10x10</option>
            <option value="12x12">12x12</option>
                `;

        escondeEaparece();
    } else if (valorSelecionado === "Gota (Pear Shape)") {
        milimetros.innerHTML = `
        <option value=" ">Milímetro</option>
            <option value="3x3">3x5</option>
            <option value="4x6">4x6</option>
            <option value="5x7">5x7</option>
            <option value="6x8">6x8</option>
            <option value="7x11">7x11</option>
            <option value="8x12">8x12</option>
            <option value="9x13">9x13</option>
            <option value="10x14">10x14</option>
            <option value="12x12">12x12</option>
                `;

        escondeEaparece();
    } else if (valorSelecionado === "Retangular (Baguette)") {
        milimetros.innerHTML = `
        <option value=" ">Milímetro</option>
            <option value="2x4">2x4</option>
            <option value="3x5">3x5</option>
            <option value="4x6">4x6</option>
            <option value="5x7">5x7</option>
            <option value="7x9">7x9</option>
                `;

        escondeEaparece();
    } else if (valorSelecionado === "Retângular (Emerald)") {
        milimetros.innerHTML = `
        <option value=" ">Milímetro</option>
            <option value="4x6">4x6</option>
            <option value="5x7">5x7</option>
            <option value="6x8">6x8</option>
            <option value="7x9">7x9</option>
            <option value="8x10">8x10</option>
            <option value="9x11">9x11</option>
            <option value="10x14">10x14</option>
                `;

        escondeEaparece();
    } else if (valorSelecionado === "Triângulo (Triangle)") {
        milimetros.innerHTML = `
        <option value=" ">Milímetro</option>
            <option value="3x3">3x3</option>
            <option value="4x4">4x4</option>
            <option value="5x5">5x5</option>
            <option value="6x6">6x6</option>
            <option value="7x7">7x7</option>
            <option value="8x8">8x8</option>
            <option value="10x10">10x10</option>
                `;

        escondeEaparece();
    } else if (valorSelecionado === "Trilion") {
        milimetros.innerHTML = `
        <option value=" ">Milímetro</option>
            <option value="4x4">4x4</option>
            <option value="6x6">6x6</option>
            <option value="6,5x6,5">6,5x6,5</option>
            <option value="7x7">7x7</option>
            <option value="10x10">10x10</option>
                `;

        escondeEaparece();
    } else if (valorSelecionado === "Cushion") {
        milimetros.innerHTML = `
        <option value=" ">Milímetro</option>
            <option value="3x3">3x3</option>
            <option value="4x4">4x4</option>
            <option value="6x6">6x6</option>
            <option value="8x8">8x8</option>
                `;

        escondeEaparece();
    } else if (valorSelecionado === "Redonda") {
        milimetros.innerHTML = `
        <option value=" ">Milímetro</option>
                <option value="0.70" data-valor="0.70">0.70</option>
                <option value="0.80" data-valor="0.80">0.80</option>
                <option value="0.90" data-valor="0.90">0.90</option>
                <option value="1.00" data-valor="1.00">1.00</option>
                <option value="1.10" data-valor="1.10">1.10</option>
                <option value="1.20" data-valor="1.20">1.20</option>
                <option value="1.25" data-valor="1.25">1.25</option>
                <option value="1.30" data-valor="1.30">1.30</option>
                <option value="1.40" data-valor="1.40">1.40</option>
                <option value="1.50" data-valor="1.50">1.50</option>
                <option value="1.60" data-valor="1.60">1.60</option>
                <option value="1.70" data-valor="1.70">1.70</option>
                <option value="1.80" data-valor="1.80">1.80</option>
                <option value="1.90" data-valor="1.90">1.90</option>
                <option value="2.00" data-valor="2.00">2.00</option>
                <option value="2.10" data-valor="2.10">2.10</option>
                <option value="2.20" data-valor="2.20">2.20</option>
                <option value="2.30" data-valor="2.30">2.30</option>
                <option value="2.40" data-valor="2.40">2.40</option>
                <option value="2.50" data-valor="2.50">2.50</option>
                <option value="2.60" data-valor="2.60">2.60</option>
                <option value="2.70" data-valor="2.70">2.70</option>
                <option value="2.80" data-valor="2.80">2.80</option>
                <option value="2.90" data-valor="2.90">2.90</option>
                <option value="3.00"  data-valor="3.00">3.00</option>
                <option value="3.00c"  data-valor="3.00 c">3.00 c</option>
                <option value="3.50sem" data-valor="3.50 sem">3.50 sem</option>
                <option value="3.50com" data-valor="3.50 com">3.50 com</option>
                <option value="4.00sem" data-valor="4.00 sem">4.00 sem</option>
                <option value="4.00com" data-valor="4.00 com">4.00 com</option>
                <option value="4.50sem" data-valor="4.50 sem">4.50 sem</option>
                <option value="4.50com" data-valor="4.50 com">4.50 com</option>
                <option value="5.00" data-valor="5.00">5.00</option>
                <option value="5.00Love" data-valor="5.00Love">5.00Love</option>
                <option value="5.50" data-valor="5.50">5.50</option>
                <option value="6.00" data-valor="6.00">6.00</option>
                <option value="6.50" data-valor="6.50">6.50</option>
                <option value="6.00Love" data-valor="6.50Love">6.50Love</option>
                <option value="7.00" data-valor="7.00">7.00</option>
                <option value="7.50" data-valor="7.50">7.50</option>
                <option value="8.00" data-valor="8.00">8.00</option>
                <option value="9.00" data-valor="9.00">9.00</option>
                <option value="9.50" data-valor="9.50">9.50</option>
                <option value="10.00" data-valor="10.00">10.00</option>
                <option value="11.00" data-valor="11.00">11.00</option>
                <option value="12.00" data-valor="12.00">12.00</option>
                <option value="13.00" data-valor="13.00">13.00</option>
                <option value="14.00" data-valor="14.00">14.00</option>
                <option value="15.00" data-valor="15.00">15.00</option>
            `;

        quilateZirconia.disabled = false
        quilateZirconia.hidden = false
    }


}
