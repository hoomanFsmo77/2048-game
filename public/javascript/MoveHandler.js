import { grid, spaces} from "./Grid.js";
import {ui} from "./Utilities.js";

const moveRight = () => {

    console.log('right before',grid.row2)


    grid.mergeItemOnRightMove()

    Object.entries(grid.grid).forEach((item,index1)=>{
        item[1].forEach((row,index2,array)=>{
            if(row){
                let nullCounter=[...item[1]].slice(index2).filter(x=> x===null).length
                let newX=Number(item[1][index2].x)
                let newY=Number(item[1][index2].y + nullCounter)
                grid.grid[`row${newX}`][(newY - nullCounter)-1]=null
                grid.updateGrid(newX,newY,row.value)
            }
        })
    })

    ui.domUpdate(grid.grid)


    grid.updateAllSpace()

    ui.addItemOnEachMove()

    console.log('right after',grid.row2)
    console.log()

}

const moveLeft = () => {
    console.log('left before',grid.row2)


    grid.mergeItemOnLeftMove()

    Object.entries(grid.grid).forEach((item,index1)=>{
        item[1].forEach((row,index2)=>{
            if(row){
                let newY=row.y-[...item[1]].slice(0,index2).filter(x=> x===null).length
                let newX=Number(item[1][index2].x)
                grid.grid[`row${newX}`][(row.y)-1]=null
                grid.updateGrid(newX,newY,row.value)

            }
        })
    })

    ui.domUpdate(grid.grid)

    grid.updateAllSpace()

    ui.addItemOnEachMove()

    console.log('left after',grid.row2)
    console.log()
}

const moveTop = () => {
    ui.addItemOnEachMove()
}

const moveBottom = () => {
    ui.addItemOnEachMove()
}

export {moveRight,moveTop,moveBottom,moveLeft}