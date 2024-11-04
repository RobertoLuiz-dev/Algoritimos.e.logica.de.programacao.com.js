/*alert(`vamos somar dois numeros?`)

let firstNumber = prompt(`Digite o primeiro número`)
let secondNumber = prompt(`Digite o segundo número`)

let result = (Number(firstNumber) + Number(secondNumber))

alert(`O resultado da sua operação de soma é: ` + result)*/





/*alert(`vamos fazer algumas operacoes matematicas?!`)

let firstNumber = prompt(`Digite o primeiro número`)
let secondNumber = prompt(`Digite o segundo número`)

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(`O resultado da soma é: ` + sum)
alert(`O resultado da subtração é: ` + sub)
alert(`O resultado da multiplicação é: ` + multi)
alert(`O resultado da divisão é: ` + div)
alert(`O resto da divisão dos dois numeros inseridos é: ` + restDiv)*/




/*let student = prompt(`Nome do(a) aluno(a).`)
let n1 = prompt(`Insira a nota da primeira prova!`)
let n2 = prompt(`Insira a nota da segunda prova!`)
let n3 = prompt(`Insira a nota da terceira prova!`)

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average >= 7


if (result) {
  alert(`Parabens ` + student + `! Você foi aprovado no bimestre com média de ` + average + `!!!`)
} else if (average < 3) {
  alert(`Caro ` + student + `, infelizmente sua média de ` + average + ` não atendeu os criterios mínimos estabelecidos para continuidade e você foi reprovado de maneira direta.`)
} else {
  alert(`Caro ` + student + `, sua media no bimestre foi de ` + average + ` não sendo portanto suficiente para aprovação direta. Estude para a prova de recuperação. Desejamos-lhe boa sorte!`)
}*/



/*let list = []

for(let item = 0; item < 10; item++) {
  itemName = prompt(`Digite o item ` + (item + 1))

  list[item] = itemName
}

alert(list)*/




/*let message = prompt(`Advinhe o número que estou pensando agora! Ele esta entre 0 e 10!`)
const randomNumber = Math.round(Math.random () * 10)

let attempts = 1;

while(Number(message) != randomNumber) {
  message = prompt(`Você não acertou! Tente novamente!`)
  attempts++
}

if(attempts != 1) {
  alert(`Parabens! O número que pensei foi o ${randomNumber} e você acertou o acertou em ${attempts} tentativas`)
} else {
  alert(`Parabens! O número que pensei foi o ${randomNumber} e você acertou o acertou em ${attempts} tentativa`)
}
*/




/*let option;
let list = [];

while(option != 3) {

  option = Number(prompt(
    `Ola usuário! Digite o nùnero correspondente à opção desejada
    
    1. Adicionar um ítem à lista
    2. Exibir os ítens adicionados
    3. Sair do programa
    `));
  
  
  if(option == 1) {
    let lastItemEntered = prompt(`Insira um ítem na lista`)
    list.push(lastItemEntered)
  } 
  
  else if (option == 2) {
    
    if(list.length == 0) {
      alert(`Ainda não existem ítens nessa lista`)
    }
    else {
      alert(list)
    }
  }
  
  else {
    alert(`Muito obrigado por usar nossa aplicação e até breve!`)
  }
}*/




/*let option;
let list = [];
  
while(option != 3) {
  
  option = Number(prompt(
    `Ola! Digite o núnero correspondente a opção desejada
      
    1. Adicionar um ítem a uma lista de compras;
    2. Exibir os ítens adicionados;
    3. Sair do programa;
  `));
  
  switch(option) {
    case 1:
      let lastItemEntered = prompt(`Insira um ítem na lista`)
      list.push(lastItemEntered)
    break;

    case 2:
      if(list.length == 0) {
      alert(`Ainda não existem ítens nessa lista`)
      }
      else {
      alert(list)
      }
    break;

    case 3:
      alert(`Muito obrigado por usar nossa aplicação e até breve!`)
    break;

    default:
      alert(`Opção inválida. Tente novamente!`)
    
  }
}*/




/*
const patients = [
  {name: `Roberto Júnior`,
  age: 40,
  weight: 86,
  height: 169},
  
  {name: `Danielle`,
  age: 38,
  weight: 65,
  height: 155},

  {name: `Leticia`,
  age: 5,
  weight: 18,
  height: 105},

  {name: `Ana Rosa`,
  age: 66,
  weight: 68,
  height: 155}, 

  {name: `Ana Roberta`,
  age: 36,
  weight: 60,
  height: 158}, 

  {name: `Renilda`,
  age: 64,
  weight: 67,
  height: 154},

  {name: `Roberto Pai`,
    age: 65,
    weight: 98,
    height: 165}
]

let patientInformation = []

for(let patient of patients) {
  patientInformation.push(patient.name, patient.age, patient.weight, patient.height)
  
  alert(`O(a) paciente ${patient.name}, com ${patient.age} ANOS de idade tem ${patient.weight} QUILOS, uma ALTURA de ${patient.height} cm e um IMC de ${(patient.weight / (patient.height / 100) ** 2).toFixed(2)}`)
}


let patientImc = []

for(let patient of patients) {
  patientImc.push()
}
*/