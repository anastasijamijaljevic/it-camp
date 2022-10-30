function binarySearch(array, el) {
    var position = Math.floor(array.length / 2)
    if (array[position] === el) {
        return position
    }
    else if (array.length === 1) {
        return null
    }
    else if (array[position] < el) {
        var arr = array.slice(position + 1)
        var result = binarySearch(arr, el)
        if (result === null) {
            return null
        }
        else {
            return position + 1 + result
        }
    }
    else {
        var arr1 = array.slice(0, position)
        return binarySearch(arr1, el)
    }

}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(binarySearch(array, 4))