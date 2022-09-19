import {grid,spaces} from "./Grid.js";

class UI {
    constructor() {
        this.itemContainer=document.querySelector('.item-container')
        this.newGameButton=document.querySelector('.button')
    }
    generateRandomNumber(){
        let nums = [1,2,3,4],
            ranNums = [],
            i = nums.length,
            j = 0;

        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            ranNums.push(nums[j]);
            nums.splice(j,1);

        }
        return ranNums
    }

    addStarterItems(){
        this.itemContainer.innerHTML=''
        for(let i=0;i <2;i++){
            let randomX=ui.generateRandomNumber()[0]
            let randomY=ui.generateRandomNumber()[1]
            grid.updateGrid(randomX,randomY,2)
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
        grid.updateGrid(x,y,2)
    }
    domUpdate(data){
        this.itemContainer.innerHTML=''
        Object.entries(data).forEach(item=>{
            item[1].forEach(row=>{
                if(row!==null){
                    ui.itemContainer.insertAdjacentHTML('beforeend',`<div class="item item-${row.value} position-${row.x}-${row.y}"><div class="inner">${row.value}</div></div>`)
                }
            })

        })


    }
}


let ui=new UI()

export {ui}