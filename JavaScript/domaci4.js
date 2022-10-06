brojUnesenihBrojeva = Number (prompt("Unesite broj brojeva"));
brojParnih=0;
brojNeparnih=0;

sumaParnih=0;
sumaNeparnih=0;

for (let i=0; i< brojUnesenihBrojeva; i++) {
    broj=Number(prompt("Unesite broj:"))
    if (broj%2===0){
        brojParnih+=1;
        sumaParnih+=broj;
    } else {
        brojNeparnih+=1;
        sumaNeparnih+=broj;
    }
}

console.log ("Imamo", brojParnih, "Parnih brojeva", sumaParnih);
console.log ("Imamo", brojNeparnih, "Parnih brojeva", sumaNeparnih);