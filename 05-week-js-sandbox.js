const R = [3, 2, 1, 2]
const L = [1, 4, 5, 3, 5 ]
// const array = []

const flip=(d, a)=>{
    console.log ("the d:", d,"the a:", a)
    const array =[]
    if (d > 0) {
        return a.push(d.sort())
    } else if (d <0) {
        return a.push(d.reverse())
    } else {
        // return "you wrong" 
        return(d, a)
    }
} 


  console.log(flip(R));
  console.log(flip(L));