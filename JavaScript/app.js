function disemowel (str) 
{
    const vowels= ["a", "e", "i", "o", "u"]
    let strArr= str.split("")
    strArr=strArr.filter((letter)=>
    {
        if(!vowels.includes(letter.toLowerCase())) {
            return letter
        }
    })
    return strArr.join("")
}

const recenica= "Ovde nesto pise"
resenje=disemowel(recenica)
console.log(resenje)