import {ui} from "./Utilities.js";
import {moveLeft,moveRight,moveBottom,moveTop} from "./MoveHandler.js";
let isStarted=false

ui.newGameButton.addEventListener('click',()=>{
    isStarted=true
    ui.addStarterItems()
})

window.addEventListener('keyup',e=>{
    e.preventDefault()
    switch (e.key) {
        case 'ArrowRight':{
             isStarted && moveRight()
        }
        break
        case 'ArrowDown':{
            isStarted && moveBottom()
        }
        break
        case 'ArrowUp':{
            isStarted && moveTop()
        }
        break
        case 'ArrowLeft':{
            isStarted && moveLeft()
        }
        break
    }

})



