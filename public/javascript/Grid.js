import {ui} from "./Utilities.js";

let spaces=['11','12','13','14','21','22','23','24','31','32','33','34','41','42','43','44']
// console.log(spaces[0].split('')[0],spaces[0].split('')[1])

class Grid {
    constructor() {
        this.row1=[null,null,null,null]
        this.row2=[null,null,null,null]
        this.row3=[null,null,null,null]
        this.row4=[null,null,null,null]
    }
    get grid(){
        return this
    }
    updateGrid(x,y,value=2){
        this[`row${x}`][y-1]={x,y,value}
    }
    updateSpace(x,y){
        let idx=spaces.findIndex(space=>{
            return space===`${x}${y}`
        })
        spaces.splice(idx,1)
    }
    updateAllSpace(grid){
        spaces=[]
        Object.entries(grid).forEach((item,index1)=>{
            item[1].forEach((row,index2)=>{
                if(!row){
                    spaces.push(`${index1+1}${index2+1}`)
                }
            })
        })
    }
    mergeItemOnRightMove(){

        for(let index=0;index < this.row1.length;index++){
            if(index-1 > -1){
                let lastItem=this.row1[index]
                let currentItem=this.row1[index+1]
                if(currentItem?.value===lastItem?.value && currentItem!==null && currentItem!==undefined){
                    let newVal=currentItem?.value+lastItem?.value
                    let newY=Math.max(currentItem?.y,lastItem?.y)

                    // console.log(currentItem,lastItem)

                    this.row1[lastItem.y-1]=null
                    this.row1[newY-1]={x:1,y:newY,value:newVal}
                    ui.moveRight(grid.grid)
                    break
                }
            }
        }

        for(let index=0;index < this.row2.length;index++){
            if(index-1 > -1){
                let lastItem=this.row2[index]
                let currentItem=this.row2[index+1]
                if(currentItem?.value===lastItem?.value && currentItem!==null && currentItem!==undefined){
                    let newVal=currentItem?.value+lastItem?.value
                    let newY=Math.max(currentItem?.y,lastItem?.y)

                    // console.log(currentItem,lastItem)

                    this.row2[lastItem.y-1]=null
                    this.row2[newY-1]={x:2,y:newY,value:newVal}
                    ui.moveRight(grid.grid)

                    break

                }
            }
        }
        for(let index=0;index < this.row3.length;index++){
            if(index-1 > -1){
                let lastItem=this.row3[index]
                let currentItem=this.row3[index+1]
                if(currentItem?.value===lastItem?.value && currentItem!==null && currentItem!==undefined){
                    let newVal=currentItem?.value+lastItem?.value
                    let newY=Math.max(currentItem?.y,lastItem?.y)

                    // console.log(currentItem,lastItem)

                    this.row3[lastItem.y-1]=null
                    this.row3[newY-1]={x:3,y:newY,value:newVal}
                    ui.moveRight(grid.grid)

                    break

                }
            }
        }

        for(let index=0;index < this.row4.length;index++){
            if(index-1 > -1){
                let lastItem=this.row4[index]
                let currentItem=this.row4[index+1]
                if(currentItem?.value===lastItem?.value && currentItem!==null && currentItem!==undefined){
                    let newVal=currentItem?.value+lastItem?.value
                    let newY=Math.max(currentItem?.y,lastItem?.y)

                    this.row4[lastItem.y-1]=null
                    this.row4[newY-1]={x:4,y:newY,value:newVal}
                    ui.moveRight(grid.grid)

                    break

                }
            }
        }
    }
}


let grid=new Grid()


export {grid,spaces}