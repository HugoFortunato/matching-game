import PlayerName from './src/components/PlayerName'
import BoardGame from './src/objects/BoardGame'
import './src/styles/elements/base.css'
import './src/styles/generic/reset.css'
import './src/styles/settings/colors.css'

const $root = document.querySelector('#root')

const playerOne = 'Player 1'
const playerTwo = 'Player 2'

$root.insertAdjacentHTML('beforeend',
    ` 
    ${PlayerName('Player1')}
    ${PlayerName('Player2')}
    ${BoardGame(6)}
   
    `
)
