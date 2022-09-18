import { grid, spaces} from "./Grid.js";
import {ui} from "./Utilities.js";

const moveRight = () => {


    Object.entries(grid.grid).forEach((item,index1)=>{
        item[1].forEach((row,index2,array)=>{
            if(row!==null){
                let nullCounter=[...item[1]].slice(index2).filter(x=> x===null).length
                let newX=Number(item[1][index2].x)
                let newY=Number(item[1][index2].y + nullCounter)
                grid.grid[`row${newX}`][(newY - nullCounter)-1]=null
                grid.updateGrid(newX,newY,row.value)
            }
        })
    })

    grid.mergeItemOnRightMove()

    ui.moveRight(grid.grid)


    grid.updateAllSpace(grid.grid)

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