import { grid, spaces} from "./Grid.js";
import {ui} from "./Utilities.js";

const moveRight = () => {
    Object.entries(grid).forEach(item=>{
        item[1].forEach((row,index)=>{
            if(row!==null){
                let nullCounter=[...item[1]].slice(index).filter(x=> x===null).length
                let newX=Number(item[1][index].x)
                let newY=Number(item[1][index].y + nullCounter)
                grid[`row${newX}`][(newY - nullCounter)-1]=null

                grid.updateGrid(newX,newY)
            }
        })
    })
    ui.moveRight(grid)
    grid.updateAllSpace(grid)
    ui.addItemOnEachMove()

}

const moveLeft = () => {
    ui.addItemOnEachMove()
}

const moveTop = () => {
    ui.addItemOnEachMove()
}

const moveBottom = () => {
    ui.addItemOnEachMove()
}

export {moveRight,moveTop,moveBottom,moveLeft}