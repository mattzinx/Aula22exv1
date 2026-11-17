let metodoHttp = prompt('Digite seu input');

switch (metodoHttp) {
    case "GET":
        console.log("Buscando dados no banco de dados...")
        break;
    case "POST":
        console.log("Criando um novo registro...")
        break;
    case "PUT":
        console.log("Atualizando os dados do registro...")
        break;
    case "DELETE":
        console.log("Registro removido com sucesso.")
        break;
    default:
        console.log("Erro: Método não permitido para esta rota.")
    break;
    };