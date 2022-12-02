let randomNumber=Math.floor(Math.random()*250)
let drzava=''
fetch("https://restcountries.com/v2/all").then(data=>data.json()).then(datatwo=>{drzava=datatwo[0].name}).then(()=>{console.log(drzava)})





