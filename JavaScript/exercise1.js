function deleteElement (arr, el) {
    for (let i=0; i<arr.length; i++) {
        if(arr[i]===el){
            arr.splice(i,1)
        }
    }
    return arr
}

let arr=[1,2,3,4,5,6,7,8,9,10]
console.log(deleteElement(arr, 5))