// alert("HEY stranger ");

let arr = [9, 7, 5, 3, 1, 2, 6, 8]

const checkTheArr = (array) => {
  let newarr = array.sort()
  for (let i = 0; i < newarr.length; i++) {
    let nextValue = newarr[i + 1]
    // console.log("next:", nextValue)
    if (nextValue - newarr[i] !== 1 ) {
      return newarr[i] + 1
    }
  }
}
console.log(checkTheArr(arr))