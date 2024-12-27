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




function alterta() {
    window.alert("Valores adicionados com sucesso!")
}

function ocultarTbl(){
    const tabela = document.getElementById("tabela");

    tabela.style.display = "none";
}

function ver_tabela(){
    const tabela = document.getElementById("tabela");

    tabela.style.display = "block";
}

function adicionar() {
    const assunto = document.getElementById("assunto").value;
    const parcela = document.getElementById("parcelas").value;
    const data = document.getElementById("data").value;
    const pagamento = document.getElementById("radio1").checked ? "Pago" : document.getElementById("radio2").checked ? "Não pago" : " ";
    const preco = document.getElementById("preco").value;
    const precoParcelas = document.getElementById("precoParcelas").value;

    // precoParcelas
    localStorage.setItem("Assunto", assunto);
    localStorage.setItem("Parcela", parcela);
    localStorage.setItem("Data", data);
    localStorage.setItem("Pagamento", pagamento);
    localStorage.setItem("Preco", preco);
    localStorage.setItem("precoParcelas", precoParcelas);

    const containerDados = document.getElementById('containerDados');
    const productRow = document.createElement('div');
    productRow.classList.add('product-row');

    productRow.innerHTML = `
     <div> ${parcela}</div>
     <div> ${assunto}</div>
     <div> ${data}</div>
     <div id="corP"> ${pagamento}</div>
     <div> ${preco}</div>
     <div> ${precoParcelas}</div>
    `;

}
       

function valoresNatabela() {
    const colocarParcela = localStorage.getItem("Parcela");
    const colocarAssunto = localStorage.getItem("Assunto");
    const colocarData = localStorage.getItem("Data");
    const colocarPagamento = localStorage.getItem("Pagamento");
    const colocarPreco = localStorage.getItem("Preco");
    const colocarPrecoParcela = localStorage.getItem("precoParcelas")

    const containerDados = document.getElementById('containerDados');

    // Create new element dia 27 às 9:54 hrs

    const productRow = document.createElement('div');
    productRow.classList.add('product-row');
    productRow.innerHTML = `
     <div class="editable" contenteditable="true">${colocarAssunto}</div>
     <div class="editable" contenteditable="true">${colocarParcela}</div>
     <div class="editable" contenteditable="true">${colocarData}</div>
     <div class="editable" contenteditable="true" id="corP">${colocarPagamento}</div>
     <div class="editable" contenteditable="true">${colocarPreco}</div>
     <div class="editable" contenteditable="true">${colocarPrecoParcela}</div>
     <button class="save-button" style="display:none" onclick="salvarEdicao(this)">Salvar</button>
     <button class="delete-button" onclick="excluir(this)">Excluir</button>
    `;
    containerDados.appendChild(productRow);
}



function editar(button) {
    const row = button.parentElement;
    const cells = row.querySelectorAll('.editable');

    // Enable editing
    cells.forEach(cell => {
        cell.setAttribute("contenteditable", "true");
        cell.style.border = "1px solid #ccc"; // Optional: visual indication of editable fields
    });
    button.style.display = "none"; // Hide the 'Editar' button when editing
    row.querySelector('.save-button').style.display = "block"; // Show 'Salvar' button
}


function salvarEdicao(button) {
    const row = button.parentElement;
    const cells = row.querySelectorAll('.editable');

    // Disable editing
    cells.forEach(cell => {
        cell.setAttribute("contenteditable", "false");
        cell.style.border = "none"; // Remove visual indication
    });
    button.style.display = "none"; // Hide the 'Salvar' button
    row.querySelector('.edit-button').style.display = "block"; // Show 'Editar' button again

    // Salvar alterações no localStorage (se necessário)
    const updatedData = {
        parcela: cells[0].textContent,
        assunto: cells[1].textContent,
        data: cells[2].textContent,
        pagamento: cells[3].textContent,
        preco: cells[4].textContent,
        precoParcelas: cells[5].textContent,
    };

    localStorage.setItem("Parcela", updatedData.parcela);
    localStorage.setItem("Assunto", updatedData.assunto);
    localStorage.setItem("Data", updatedData.data);
    localStorage.setItem("Pagamento", updatedData.pagamento);
    localStorage.setItem("Preco", updatedData.preco);
    localStorage.setItem("precoParcelas", updatedData.precoParcelas);
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


function calcular(){
    const fatMoi = document.getElementById("fatu-Moi").value;
    const fatZir = document.getElementById("fatu-Zir").value;
    const totalFatu = document.getElementById("faturaTotal");
    const soma = parseFloat(fatMoi)  + parseFloat(fatZir);

    totalFatu.innerHTML = soma;

    // ---- Compras
    const compMoi = document.getElementById("comp-Moi").value;
    const compZir = document.getElementById("comp-Zir").value;
    const comprasTotais = document.getElementById("comprasTotais");
    const somaComp = parseFloat(compMoi) + parseFloat(compZir)

    comprasTotais.innerHTML = somaComp;

    // ---- Despesas totais 
    const depesasTotais = document.getElementById("despesas");
    depesasTotais.innerHTML = soma - somaComp;

    // ---- Valor líquido
    const valorLiquido = document.getElementById("liquido");
    valorLiquido.innerHTML = (soma - somaComp) / 2;
}




function calcularParcela(){
    const totalParcelas = document.getElementById("precoParcelas");
    const parcela = document.getElementById("parcelas").value;
    const preco = document.getElementById("preco").value;
    
    totalParcelas.value = preco / parcela;
}