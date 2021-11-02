function Post(url, body){

}

function cadastroAluno(){
    event.preventDefault()
    let url = "localhost:3001/cadastroAluno"
    let nome = document.getElementById("nome").value
    let data = document.getElementById("data").value
    let curso = document.getElementById("curso").value
    let periodo = document.getElementById("periodo").value
    let cidade = document.getElementById("cidade").value
    let telefone = document.getElementById("telefone").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let sobre = document.getElementById("sobre").value

    console.log(nome)
    console.log(data)
    console.log(curso)
    console.log(periodo)
    console.log(cidade)
    console.log(telefone)
    console.log(email)
    console.log(senha)
    console.log(sobre)
}