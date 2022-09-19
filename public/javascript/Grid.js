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
    restart(){
        this.row1=[null,null,null,null]
        this.row2=[null,null,null,null]
        this.row3=[null,null,null,null]
        this.row4=[null,null,null,null]
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
    mergeHelper(which,row){

        for(let index=0;index < this[which].length;index++){
            if(this[which][0]!==undefined && this[which][0]!==null && this[which][1]?.value===this[which][0]?.value){
                let newVal=this[which][1]?.value + this[which][0]?.value
                this[which][0]=null
                this[which][1]={x:row,y:2,value:newVal}
                ui.domUpdate(this.grid)
            }

            if(index-1 > -1){
                let lastItem=this[which][index]
                let currentItem=this[which][index+1]
                if(currentItem?.value===lastItem?.value && currentItem!==null && currentItem!==undefined){
                    let newVal=currentItem?.value+lastItem?.value
                    let newY=Math.max(currentItem?.y,lastItem?.y)
                    this[which][lastItem.y-1]=null
                    this[which][newY-1]={x:row,y:newY,value:newVal}
                    ui.domUpdate(this.grid)
                    break
                }
            }

        }

    }
    mergeItemOnRightMove() {
        this.mergeHelper('row1',1)
        this.mergeHelper('row2',2)
        this.mergeHelper('row3',3)
        this.mergeHelper('row4',4)
    }
}


let grid=new Grid()


export {grid,spaces}