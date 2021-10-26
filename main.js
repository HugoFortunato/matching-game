import CardGame from './src/components/CardGame'
import './src/styles/generic/reset.css'
import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'

const $root = document.querySelector('#root')
const $htmlCardGame = CardGame()

console.log($htmlCardGame)

$root.insertAdjacentHTML('beforeend', $htmlCardGame)
