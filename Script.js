// Adiciona a funcionalidade de exibir e ocultar o menu dropdown
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

links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação

        // Pega o valor armazenado no atributo data-valor
        var valorSelecionado = link.getAttribute("data-valor");

        // Exibe o valor selecionado no elemento da página
        document.getElementById("milimetro_alteravel").textContent = valorSelecionado;
    });
});


var links = document.querySelectorAll(".dropdown-content2 a");

links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Impede o comportamento padrão de navegação

        // Pega o valor armazenado no atributo data-valor
        var valorSelecionado = link.getAttribute("data-valor");

        // Exibe o valor selecionado no elemento da página
        document.getElementById("milimetro_alteravel").textContent = valorSelecionado;
    });
});

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu-icon');
    
    // Alterna a classe "open" no menu e no ícone
    sidebar.style.right = sidebar.style.right === '0px' ? '-250px' : '0px';
    menuIcon.classList.toggle('open');
}