import { grid, spaces} from "./Grid.js";
import {ui} from "./Utilities.js";

const moveRight = () => {
    // console.log('before')
    // console.log(grid.row1[0])
    // console.log(grid.row1[1])
    // console.log(grid.row1[2])
    // console.log(grid.row1[3])
    //
    // console.log()
    //

    Object.entries(grid.grid).forEach(item=>{
        for(let index=3;index > -1 ;index--){
            if(item[1][index]){
                let val=item[1][index] && item[1][index].value
                let nullCounter=[...item[1]].slice(index,4).filter(x=> x===null).length
                let newX=Number(item[1][index].x)
                let newY=Number(item[1][index].y + nullCounter)

                // console.log(item[1][index],[...item[1]].slice(index,4),item[1],newY,nullCounter,item[1][index].y)

                grid.grid[`row${newX}`][item[1][index].y -1 ]=null

                grid.updateGrid(newX,newY,val)

                ui.domUpdate(grid.grid)

            }
        }
    })

    grid.mergeItemOnRightMove()

    ui.domUpdate(grid.grid)


    grid.updateAllSpace()

    ui.addItemOnEachMove()

    // console.log('after')
    // console.log(grid.row1[0])
    // console.log(grid.row1[1])
    // console.log(grid.row1[2])
    // console.log(grid.row1[3])
    // console.log()

}

const moveLeft = () => {

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


}

const moveTop = () => {
    ui.addItemOnEachMove()
}

const moveBottom = () => {
    ui.addItemOnEachMove()
}

export {moveRight,moveTop,moveBottom,moveLeft}