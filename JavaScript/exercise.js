var isArray= function (input) {
    if (toString.call(input)==="[object Array]")
    return true
    return false
}

console.log (isArray("Nije niz"))
console.log(isArray([1,2,3,4]))