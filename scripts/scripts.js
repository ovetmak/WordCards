import { wordPairsVerbos } from '/scripts/verbos.js'
import { wordPairsAdj } from '/scripts/adjectives.js'
import { wordPairs250 } from '/scripts/250.js'
import { wordPairs1000 } from '/scripts/1000.js'
import { wordPairsDefault } from '/scripts/default.js'

const uaWord = document.querySelector('#uaWord')
const esWord = document.querySelector('#esWord')
const enWord = document.querySelector('#enWord')
const enWordEs = document.querySelector('#enWordEs')

const uaButton = document.querySelector('#ua')
const esButton = document.querySelector('#es')

const upperBox = document.querySelector('#upperBox')
const lowerBox = document.querySelector('#lowerBox')

const adjButton = document.querySelector('#adj')
const verbButton = document.querySelector('#verb')
const twoFiftyButton = document.querySelector('#twoFifty')
const thousandButton = document.querySelector('#thousand')
const reset = document.querySelector('#reset')

const wordPlus = document.querySelector('#wordPlus')
const wordMinus = document.querySelector('#wordMinus')

let wordSet = wordPairsDefault
let wordPlusCounter = 0
let wordMinusCounter = 0

adjButton.addEventListener('click', () => {
  wordSet = wordPairsAdj
  uaButton.classList.remove('btn-grad-en')
  uaButton.classList.add('btn-grad')
  uaButton.innerText = 'UA 🇺🇦'
  esWord.textContent = '?'
  uaWord.textContent = '?'
})

verbButton.addEventListener('click', () => {
  wordSet = wordPairsVerbos
  uaButton.classList.remove('btn-grad-en')
  uaButton.classList.add('btn-grad')
  uaButton.innerText = 'UA 🇺🇦'
  esWord.textContent = '?'
  uaWord.textContent = '?'
})

twoFiftyButton.addEventListener('click', () => {
  wordSet = wordPairs250
  uaButton.innerText = 'EN 🇬🇧'
  uaButton.classList.remove('btn-grad')
  uaButton.classList.add('btn-grad-en')
  esWord.textContent = '?'
  uaWord.textContent = '?'
})

thousandButton.addEventListener('click', () => {
  uaButton.classList.remove('btn-grad')
  uaButton.classList.add('btn-grad-en')
  uaButton.innerText = 'EN 🇬🇧'
  wordSet = wordPairs1000
  esWord.textContent = '?'
  uaWord.textContent = '?'
})

uaButton.addEventListener('click', () => {
  newUaWord()
})

esButton.addEventListener('click', () => {
  newEsWord()
})

function newUaWord() {
  let randomNumber = Math.floor(Math.random() * wordSet.length)
  uaWord.textContent = wordSet[randomNumber].ua
  enWord.textContent = wordSet[randomNumber].en
  enWordEs.textContent = ''
  uaButton.disabled = true
  esButton.disabled = true
  esWord.textContent = '?'
  lowerBox.addEventListener(
    'click',
    () => {
      esWord.textContent = wordSet[randomNumber].es
      uaButton.disabled = false
      esButton.disabled = false
    },
    { once: true }
  )
}

lowerBox.addEventListener('click', function (evt) {
  if (esWord.textContent === '?') {
    if (evt.x <= document.activeElement.clientWidth / 2) {
      wordPlus.textContent = `+${(wordPlusCounter += 1)}`
    } else {
      wordMinus.textContent = `-${(wordMinusCounter += 1)}`
    }
  }
})

function newEsWord() {
  let randomNumber = Math.floor(Math.random() * wordSet.length)
  esWord.textContent = wordSet[randomNumber].es
  enWordEs.textContent = wordSet[randomNumber].en
  enWord.textContent = ''
  esButton.disabled = true
  uaButton.disabled = true
  uaWord.textContent = '?'
  upperBox.addEventListener(
    'click',
    () => {
      uaWord.textContent = wordSet[randomNumber].ua
      uaButton.disabled = false
      esButton.disabled = false
    },
    { once: true }
  )
}

upperBox.addEventListener('click', function (evt) {
  if (uaWord.textContent === '?') {
    if (evt.x <= document.activeElement.clientWidth / 2) {
      wordPlus.textContent = `+${(wordPlusCounter += 1)}`
    } else {
      wordMinus.textContent = `-${(wordMinusCounter += 1)}`
    }
  }
})
