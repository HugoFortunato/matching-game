import PlayerName from '../../components/PlayerName'
import VsPlayer from '../../components/VsPlayer'
import PlayerScore from '../../components/PlayerScore'
import './style.css';

function ScoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${PlayerName('Player1')}
            ${PlayerScore(3)}
            ${VsPlayer()}
            ${PlayerScore()}
            ${PlayerName('Player2')}
        </header>
    `
}

export default ScoreBoard

