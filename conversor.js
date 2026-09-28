import PromptSync from "prompt-sync"

const prompt = PromptSync()

let opcao = ''
let tempCelsius = ''
let tempFahrenheit = ''

do {
    console.log()
    console.log('=== Conversor de Unidades ===')
    console.log('1. Celsius para Fahrenheit')
    console.log('2. Fahrenheit para Celsius')
    console.log('3. Quilômetros para Milhas')
    console.log('4. Milhas para Quilômetros')
    console.log('0. Sair')
    opcao = prompt('Escolha uma opção: ')

    switch(opcao) {
        case '0':
            console.log('Encerrando o conversor. Até a próxima!')
            break
        case '1':
            tempCelsius = prompt('Temperatura em Celsius: ')
            tempFahrenheit = tempCelsius * 1.8 + 32
            console.log(`${tempCelsius} ºC equivalem a ${tempFahrenheit} ºF.`)
            break
        case '2':
            tempFahrenheit = prompt('Temperatura em Fahrenheit: ')
            tempCelsius = (tempFahrenheit - 32) * 5/9
            console.log(`${tempFahrenheit} ºF equivalem a ${tempCelsius} ºC.`)
    }
} while(opcao !== '0')