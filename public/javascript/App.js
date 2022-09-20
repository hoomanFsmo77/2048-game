import {ui} from "./Utilities.js";
import {moveLeft,moveRight,moveBottom,moveTop} from "./MoveHandler.js";
import {grid} from "./Grid.js";
let isStarted=false

ui.newGameButton.addEventListener('click',()=>{
    isStarted=true
    grid.restart()
    grid.updateAllSpace(grid.grid)
    ui.addStarterItems()
})

window.addEventListener('keydown',e=>{
    isStarted && e.preventDefault()
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

window.addEventListener('touchstart',e=>{
    console.log('start')
})
window.addEventListener('touchmove',e=>{
    console.log('move')
})
window.addEventListener('touchend',e=>{
    console.log('end')
})
