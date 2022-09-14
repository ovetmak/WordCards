const uaWord = document.querySelector('#uaWord');
const esWord = document.querySelector('#esWord');
const uaButton = document.querySelector('#ua');
const esButton = document.querySelector('#es');
const stopButton = document.querySelector('#stop');
const upperBox = document.querySelector('#upperBox')
const lowerBox = document.querySelector('#lowerBox')

const wordPairs = [
    { es: 'acompañar', ua: 'проводити/супроводжувати' },
    { es: 'almorzar', ua: 'обідати' },
    { es: 'ayudar', ua: 'допомагаті' },
    { es: 'bailar', ua: 'танцюваті' },
    { es: 'bañar', ua: 'купати' },
    { es: 'beber', ua: 'пити' },
    { es: 'cantar', ua: 'співати' },
    { es: 'calmar ', ua: 'заспокоювати' },
    { es: 'comer', ua: 'їсти' },
    { es: 'comprar', ua: 'купувати' },
    { es: 'conoser', ua: 'знати когось/зайомитись/узнавати' },
    { es: 'contestar', ua: 'відповидати' },
    { es: 'dar ', ua: 'давати' },
    { es: 'deber', ua: 'бути винним (жорстко)' },
    { es: 'decir', ua: 'говорити, розповідати' },
    { es: 'depender', ua: 'залежати' },
    { es: 'desayunar', ua: 'снідати' },
    { es: 'descansar', ua: 'відпочівати' },
    { es: 'dormir', ua: 'спати' },
    { es: 'enrojecer', ua: 'червоніти (сромитись)' },
    { es: 'enseñar', ua: 'викладати/навчати' },
    { es: 'escoger', ua: 'вибирати' },
    { es: 'escuchar ', ua: 'слухати' },
    { es: 'estar', ua: 'бути (фізично десь, в певному стані)' },
    { es: 'estudiar', ua: 'вчити' },
    { es: 'ganar', ua: 'заробляти/вигравати' },
    { es: 'gustar', ua: 'подобатась' },
    { es: 'hablar', ua: 'розмовляти' },
    { es: 'hacer', ua: 'робити' },
    { es: 'interesar', ua: 'цікавитись' },
    { es: 'interpretar un papel', ua: 'грати роль' },
    { es: 'ir', ua: 'йти' },
    { es: 'jugar', ua: 'грати в ігри' },
    { es: 'lavar', ua: 'мити' },
    { es: 'llamar', ua: 'називати' },
    { es: 'mirar', ua: 'дивитись' },
    { es: 'nadar', ua: 'плавати' },
    { es: 'necesitar', ua: 'потребувати' },
    { es: 'oír ', ua: 'чути' },
    { es: 'olvidar', ua: 'забувати' },
    { es: 'pagar ', ua: 'платити' },
    { es: 'pasar', ua: 'проводити час/траплятись' },
    { es: 'pasear', ua: 'гуляти' },
    { es: 'preguntar', ua: 'запитувати' },
    { es: 'pensar', ua: 'думати' },
    { es: 'poder', ua: 'могти/мати можливість' },
    { es: 'probar', ua: 'пробувати' },
    { es: 'prometer', ua: 'обіцяти' },
    { es: 'querer', ua: 'хотіти/любити' },
    { es: 'regalar', ua: 'дарувати' },
    { es: 'saber', ua: 'знати' },
    { es: 'ser', ua: 'бути' },
    { es: 'ser amigos', ua: 'бути друзями/дружити' },
    { es: 'tener', ua: 'мати' },
    { es: 'tener miedo', ua: 'боятись/мати страх' },
    { es: 'tomar', ua: 'брати/мати' },
    { es: 'trabajar', ua: 'працювати' },
    { es: 'tranquilizar', ua: 'заспокоювати' },
    { es: 'traducir', ua: 'перекладати' },
    { es: 'tratar', ua: 'старатись' },
    { es: 'vender', ua: 'продавати' },
    { es: 'venir', ua: 'приходити/приїзжати' },
    { es: 'ver', ua: 'бачити' },
    { es: 'viajar', ua: 'мандрувати' },
    { es: 'vivir', ua: 'жити' }
]

// uaButton.addEventListener('click', () => {
//     alert('Yes Clicked')
// })


uaButton.addEventListener('click', () => {
    newUaWord()
})

function newUaWord() {
    let randomNumber = Math.floor(Math.random() * wordPairs.length)
    uaWord.textContent = wordPairs[randomNumber].ua
    esWord.textContent = '?'
    lowerBox.addEventListener('click', () => {
        esWord.textContent = wordPairs[randomNumber].es
    })
}

esButton.addEventListener('click', () => {
    newEsWord()
})

function newEsWord() {
    let randomNumber = Math.floor(Math.random() * wordPairs.length)
    esWord.textContent = wordPairs[randomNumber].es
    uaWord.textContent = '?'
    upperBox.addEventListener('click', () => {
        uaWord.textContent = wordPairs[randomNumber].ua
    })
}