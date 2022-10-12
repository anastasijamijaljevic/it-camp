niz = [5, 25, "apple", [25, "apple","banana", "mango"]]

function milica(array, element) {
    brojac = 0;

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j] === element)
                    brojac++
            }
        } else {
            if (array[i] === element) {
                brojac++
            }
        }
    }
    return brojac
}

console.log(milica(niz, "apple"))