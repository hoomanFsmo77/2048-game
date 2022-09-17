let spaces=['11','12','13','14','21','22','23','24','31','32','33','34','41','42','43','44']
// console.log(spaces[0].split('')[0],spaces[0].split('')[1])

class Grid {
    constructor() {
        this.row1=[null,null,null,null]
        this.row2=[null,null,null,null]
        this.row3=[null,null,null,null]
        this.row4=[null,null,null,null]
    }
    updateGrid(x,y){
        this[`row${x}`][y-1]={x,y}
    }
    updateSpace(x,y){
        let idx=spaces.findIndex(space=>{
            return space===`${x}${y}`
        })
        spaces.splice(idx,1)
    }

}


let grid=new Grid()


export {grid,spaces}