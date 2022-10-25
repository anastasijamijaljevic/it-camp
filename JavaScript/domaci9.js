function FindL (cCharacter, a, zaustaviPretragu) {
    counter=0
    for (let i=0; i<a.length; i++){
        if(cCharacter===a[i]){
            counter++
        }
        if(zaustaviPretragu===a[i])
        console.log(i)
        return
    }
    return counter
}

FindL("i", "knjiga", "v")