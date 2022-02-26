console.log("Ola mundo")

// Let (var) para declarar uma variavel generica que pode ser alterada
let nome = "Paulo"
let pessoa1 = "Amanda"

// Constante uma vez inicializada o valor nao pode ser alterado
const idade = 10

//Strings ""
let primeiroNome = "Hudson"
let SegundoNome = "Gabriel"

// Numeros
let primeiroNumero = 10
let segundoNumero = 30
//Se tentar juntar numero com texto, ele vai tratar tudo como texto

//Boleanos
let verdadeiro = true
let Falso = false

//Tipos de dados objetos
//array (pode ter varios tipos dentro de um mesmo array boleanos, numeros e strings)
let listaNomes = []
let listaNumeros = []

listaNomes.push("Paulo")

//Objeto
const pessoa = {
    nome: "Amanda",
    telefone: "00000000",
    cpf: "123456789",
    cidade: "Curitiba",
}

//Operadores basicos
// Soma +
// Subtracao -
// Divisao /
// Multiplicao *
// Mais igual +=
// Menos igual -=

//Bolenos e comparacoes
// maior >
// menor <
// maior igual >=
// menor igual <=
// Igual ==
// diferente !==
// Verifica igualdade e tambem o tipo de dado (===)
// Retornam true ou false

//Condicionais (if/else)
const paulo = {
    nome: "Paulo",
    idade: 19,
    cidade: "Curitiba"
}

if (paulo.idade >= 18 || paulo.cidade == "Curitiba"){
    console.log("Essa pessoa atingiu a maior idade")
    console.log("Cidade verificada")
}else{
    console.log("Essa pessoa nao atingiu a maior idade")
    console.log("Cidade nao verificada")
}

// && e || ou ! nao
// && todas tem que ser verdadeiras
// || Qualquer uma pode ser verdadeira
// ! se falso entao verdadeiro, se verdadeiro entao falso

//Funcoes
//variaveis dentro das funcoes funcionam apenas la dentro
function soma (numero1, numero2){
    console.log(numero1 + numero2)
}
soma(23,10)

function divisao (numero1,numero2){
    return numero1/numero2
}
let resultadoDivisao = divisao(4,2)

// Estrutura de repeticao
let filaAtendimento = ["Hudson","Vitor","Guilherme","Amanda","Maria","Daniel","Gabriel"]

for (let i = 0; i < filaAtendimento.length; i++){
    console.log(filaAtendimento[i])
}

//DOM - Modelo de objeto do documento
let divPessoa = document.querySelector(".pessoa") //Acessa documento e pega o que tem na classe pessoa
// divPessoa.innerText = "Paulo" //Troca o conteudo da div

for (let i = 0; i < filaAtendimento.length; i++){
    let div = document.createElement("div")
    div.innerText = filaAtendimento[i]
    divPessoa.appendChild(div)
}