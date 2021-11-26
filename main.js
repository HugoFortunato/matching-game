import CardFrontBack from './src/components/CardFrontBack'
import BoardGame from './src/objects/BoardGame'
import ScoreBoard from './src/objects/ScoreBoard'
import './src/styles/elements/base.css'
import './src/styles/generic/reset.css'
import './src/styles/settings/colors.css'

const $root = document.querySelector('#root')


$root.insertAdjacentHTML('beforeend',
    `
    ${ScoreBoard()}
    ${BoardGame(2)}                         
    `
)
