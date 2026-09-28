import PromptSync from "prompt-sync"

const prompt = PromptSync()

let opcao = ''
let tempCelsius = 0
let tempFahrenheit = 0
let distKm = 0
let distMilhas = 0

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
            tempCelsius = Number(prompt('Temperatura em Celsius: '))
            tempFahrenheit = (tempCelsius * 1.8 + 32).toFixed(2)
            console.log(`${tempCelsius} ºC equivalem a ${tempFahrenheit} ºF.`)
            break
        case '2':
            tempFahrenheit = Number(prompt('Temperatura em Fahrenheit: '))
            tempCelsius = ((tempFahrenheit - 32) * 5/9).toFixed(2)
            console.log(`${tempFahrenheit} ºF equivalem a ${tempCelsius} ºC.`)
            break
        case '3':
            distKm = Number(prompt('Distância em quilômetros: '))
            distMilhas = (distKm * 0.621371).toFixed(2)
            console.log(`${distKm} equivalem a ${distMilhas} milhas.`)
            break
    }
} while(opcao !== '0')