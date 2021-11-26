import BoardGame from './src/objects/BoardGame'
import ScoreBoard from './src/objects/ScoreBoard'
import './src/styles/elements/base.css'
import './src/styles/generic/reset.css'
import './src/styles/settings/colors.css'

const $root = document.querySelector('#root')

const playerOne = 'Player 1'
const playerTwo = 'Player 2'

$root.insertAdjacentHTML('beforeend',
    `
    ${ScoreBoard()}
    ${BoardGame(6)} 
    `
)
