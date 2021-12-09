import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target
        const $cardFrontBack = $origin.closest('.card-front-back')

        // $cardFrontBack.classList.add('-active')

        // Dois métodos a seguir para verificar se a classe -active é existe ou não.

        //1° método
        // $cardFrontBack.classList.contains('-active') ? $cardFrontBack.classList.remove('-active') : $cardFrontBack.classList.add('-active')

        //2° método
        $cardFrontBack.classList.toggle('-active')
    
        // Vira o card em 2000ms
        setTimeout(() => {$cardFrontBack.classList.remove('-active')}, 2000)  
        

        
    } 
   
  return /*html*/ `
    <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
      <div class="card -front">
        ${CardGame()}
      </div>
      <div class="card -back">
        ${CardGame("javascript", "Logo do JavaScript")}
      </div>
    </article>
  `;
}

export default CardFrontBack;