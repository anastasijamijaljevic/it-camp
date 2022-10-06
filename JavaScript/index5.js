
uneseniBroj = Math.floor(Math.random()*100);

while (true) {
    broj = Number(prompt("Unesite broj"));
    if (broj === 0) {
        break;
    } else if (broj === uneseniBroj) {
        console.log('Uneli ste tacan broj')
        break;
    } else if (broj < uneseniBroj) {
        console.log('Unesite veci broj')
    } else if (broj > uneseniBroj) {
        console.log('Unesite manji broj')
    }

}