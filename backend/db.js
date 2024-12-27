const mysql = require('mysql2/promise'); // Instale npm install mysql2

// Configuração do pool de conexões
const db = mysql.createPool({
    host: 'localhost',      // Servidor do banco 
    user: 'root',           // Usuário 
    password: 'Toby@2020',   // Senha  
    database: 'moissanite', // Nome do banco de dados
    waitForConnections: true,
    connectionLimit: 10,    
    queueLimit: 0           
});

// Teste de conexão 
db.getConnection()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });

module.exports = db;