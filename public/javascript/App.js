import {ui} from "./Utilities.js";
import {moveLeft,moveRight,moveBottom,moveTop} from "./MoveHandler.js";
import {grid} from "./Grid.js";
let isStarted=false
let startX,startY
let direction



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
    document.body.style.touchAction='none'
    isStarted && e.preventDefault()
    startY=e.changedTouches[0].clientY
    startX=e.changedTouches[0].clientX
})
window.addEventListener('touchmove',e=>{
    document.body.style.touchAction='none'
    isStarted && e.preventDefault()
})
window.addEventListener('touchend',e=>{
    document.body.style.touchAction='none'
    isStarted && e.preventDefault()

    let endX=e.changedTouches[0].clientX
    let endY=e.changedTouches[0].clientY

    let dx=endX-startX
    let dy=endY-startY

    let absDx=Math.abs(dx)
    let absDy=Math.abs(dy)

    if (Math.max(absDx, absDy) > 10) {
        let direction=absDx > absDy ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up')
        switch (direction) {
            case 'right':{
                isStarted && moveRight()
            }
                break
            case 'down':{
                isStarted && moveBottom()
            }
                break
            case 'up':{
                isStarted && moveTop()
            }
                break
            case 'left':{
                isStarted && moveLeft()
            }
            break
        }
        console.log(direction)
    }


    // direction= lastY > e.changedTouches[0].clientY + 5 ?  'Down'  :  'Up'
    // direction=lastX > e.changedTouches[0].clientX+5 ? 'right' : 'left'
    //
    // console.log(direction)
})
