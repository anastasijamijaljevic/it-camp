brojSati = Number(prompt("Unesite broj sati i saznajte doba dana")); // 2

switch (true) { // 2
    case brojSati < 10: // true   true === true => false
        console.log('Jutro');
        break;

    case brojSati < 12:
        console.log('Podne');
        break;

    case brojSati < 18:
        console.log('Predvecerje');
        break;

     case brojSati< 22:
        console.log('Vece');
        break;

      default:
        console.log('Pogesno!')  


}
