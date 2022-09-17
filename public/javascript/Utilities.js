import {grid,spaces} from "./Grid.js";

class UI {
    constructor() {
        this.itemContainer=document.querySelector('.item-container')
        this.newGameButton=document.querySelector('.button')
    }
    addStarterItems(){
        this.itemContainer.innerHTML=''
        for(let i=0;i <2;i++){
            let randomX=Math.ceil(Math.random()*4)
            let randomY=Math.ceil(Math.random()*4)
            grid.updateGrid(randomX,randomY)
            grid.updateSpace(randomX,randomY)
            this.itemContainer.insertAdjacentHTML('beforeend',`<div class="item item-2 position-${randomX}-${randomY}"><div class="inner">2</div></div>`)
        }
    }
    addItemOnEachMove(){
        let randomNum=Math.floor(Math.random()*spaces.length)
        let x=Number(spaces[randomNum]?.split('')[0])
        let y=Number(spaces[randomNum]?.split('')[1])
        spaces.length>0 && this.itemContainer.insertAdjacentHTML('beforeend',`<div class="item item-2 position-${x}-${y}"><div class="inner">2</div></div>`)
        grid.updateSpace(x,y)
        grid.updateGrid(x,y)
    }
    moveRight(data){
        this.itemContainer.innerHTML=''
        Object.entries(data).forEach(item=>{
            item[1].forEach(row=>{
                if(row!==null){
                    ui.itemContainer.insertAdjacentHTML('beforeend',`<div class="item item-2 position-${row.x}-${row.y}"><div class="inner">2</div></div>`)
                }
            })

        })


    }
}


let ui=new UI()

export {ui}