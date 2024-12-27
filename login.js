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

//login
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


//MASCARA CEP
function mascara_cep() {
    var cep_formatado = document.getElementById("cep").value
    if (cep_formatado[2] != ".") {
        if (cep_formatado[2] != undefined) {
            document.getElementById("cep").value = cep_formatado.slice(0, 2) + "." + cep_formatado[2];
        }
    }

    if (cep_formatado[6] != "-") {
        if (cep_formatado[6] != undefined) {
            document.getElementById("cep").value = cep_formatado.slice(0, 6) + "-" + cep_formatado[6]
        }
    }
}

//mascara telefone
function mascara_telefone() {

    //máscara
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0] != "(") {
        if (tel_formatado[0] != undefined) {
            document.getElementById("telefone").value = "(" + tel_formatado[0];
        }
    }

    if (tel_formatado[3] != ")") {
        if (tel_formatado[3] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
        }
    }

    if (tel_formatado[4] != " ") {
        if (tel_formatado[4] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 4) + " " + tel_formatado[4]
        }
    }

    if (tel_formatado[6] != " ") {
        if (tel_formatado[6] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 6) + " " + tel_formatado[6]
        }
    }

    if (tel_formatado[11] != "-") {
        if (tel_formatado[11] != undefined) {
            document.getElementById("telefone").value = tel_formatado.slice(0, 11) + "-" + tel_formatado[11]
        }
    }
}

// Função para alternar entre login e cadastro
function toggleForm() {
    const formContainer = document.getElementById('form-containerMob');

    // Verifica a rotação atual do contêiner e aplica a rotação de 180 graus
    const isLoginVisible = formContainer.style.transform === 'rotateY(180deg)';

    if (isLoginVisible) {
        formContainer.style.transform = 'rotateY(0deg)';
    } else {
        formContainer.style.transform = 'rotateY(180deg)';
    }
}
