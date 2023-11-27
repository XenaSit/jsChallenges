const R = [3, 2, 1, 2]
const L = [1, 4, 5, 3, 5 ]
const array = []

const flip=(d, a)=>{
    // console.log ("the d:", d,"the a:", a)
    if (d !== 0) {
        array.push(d.sort())
        return a
    } else if (d <0) {
        return array.push(d.reverse())
    } else {
        // return "you wrong" 
        return(d, a)
    }
} 


  console.log(flip(R, array));
  console.log(flip(L, array));