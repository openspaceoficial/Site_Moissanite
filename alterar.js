//btn-cadastro
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
//-----------------------
//menu lateral
// Função para abrir e fechar o menu
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.getElementById('menu-icon');
    const content = document.getElementById('content');

    // Se o menu estiver fechado, abra-o
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        content.classList.remove('shifted');
        menuIcon.style.display = 'block'; // Exibe o ícone novamente
    } else {
        sidebar.classList.add('open');
        content.classList.add('shifted');
        menuIcon.style.display = 'none'; // Esconde o ícone
    }
}

// Fecha o menu se o clique for fora do menu
document.addEventListener('click', function (event) {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.getElementById('menu-icon');
    const content = document.getElementById('content');

    // Verifica se o clique foi fora do menu e do ícone
    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            content.classList.remove('shifted');
            menuIcon.style.display = 'block'; // Reexibe o ícone
        }
    }
});
//-----------------------
//dropdown
function atualizarInput() {
    // Obter o valor selecionado
    const select = document.getElementById('opcao');
    const input = document.getElementById('campoInput');
    input.value = select.value; // Atualiza o valor do input com a opção selecionada
}

//colocar valores digitados no input
function adicionarTexto() {
    // Obter os valores inseridos nos campos de entrada
    const entrada1 = document.getElementById('entrada1').value;
    const entrada2 = document.getElementById('entrada2').value;
    const entrada3 = document.getElementById('entrada3').value;
    const entrada4 = document.getElementById('entrada4').value;
    const entrada5 = document.getElementById('entrada5').value;
    const entradatipo = document.getElementById('campoInput').value;

    // Verificar se todos os campos de entrada estão preenchidos
    if (entrada1.trim() !== "" && entrada2.trim() !== "" && entrada3.trim() !== "" && entrada4.trim() !== "" && entrada5.trim() !== "") {
        // Adicionar os textos aos campos de saída correspondentes
        document.getElementById('saida1').value = entrada1;
        document.getElementById('saida2').value = entrada2;
        document.getElementById('saida3').value = entrada3;
        document.getElementById('saida4').value = entrada4;
        document.getElementById('saida5').value = entrada5;
        document.getElementById('saida6').value = entradatipo;

        // Limpar os campos de entrada após adicionar
        document.getElementById('entrada1').value = "";
        document.getElementById('entrada2').value = "";
        document.getElementById('entrada3').value = "";
        document.getElementById('entrada4').value = "";
        document.getElementById('entrada5').value = "";
        document.getElementById('campoInput').value = "";
    } else {
        alert("Por favor, preencha todos os campos!");
    }

    modal.close();

}

function alterarTexto() {
    // Obter os valores dos campos de saída
    const saida1 = document.getElementById('saida1').value;
    const saida2 = document.getElementById('saida2').value;
    const saida3 = document.getElementById('saida3').value;
    const saida4 = document.getElementById('saida4').value;
    const saida5 = document.getElementById('saida5').value;
    const saida6 = document.getElementById('saida6').value;

    // Verificar se todos os campos de saída têm valores
    if (saida1.trim() !== "" && saida2.trim() !== "" && saida3.trim() !== "" && saida4.trim() !== "") {
        // Transferir os valores dos campos de saída para os campos de entrada
        document.getElementById('entrada1').value = saida1;
        document.getElementById('entrada2').value = saida2;
        document.getElementById('entrada3').value = saida3;
        document.getElementById('entrada4').value = saida4;
        document.getElementById('entrada5').value = saida5;
        document.getElementById('campoInput').value = saida6;

        // Limpar os campos de saída após transferir
        document.getElementById('saida1').value = "";
        document.getElementById('saida2').value = "";
        document.getElementById('saida3').value = "";
        document.getElementById('saida4').value = "";
        document.getElementById('saida5').value = "";
        document.getElementById('saida6').value = "";
    } else {
        alert("Por favor, adicione valores primeiro antes de alterar!");
    }
}

//modal
const abrirmodal = document.querySelector("#open-modal");

const fecharmodal = document.querySelector("#fechar");

const modal = document.querySelector("#modal");

const fade = document.querySelector("#modal-fade");




function abrirFechar() {

    //fade.classList.toggle("show")

    modal.showModal()

    // modal.classList.remove("hide")

    //fade.classList.remove("hide")

}

fecharmodal.addEventListener("click", () => {
    modal.close();
})
