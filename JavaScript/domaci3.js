mesec=Number (prompt("Unesite broj meseca:"))

switch(mesec) {
    case 1:
    case 2:
    case 3:
        console.log ("Pripada prvoj cetvrtini")
        break;
    case 4:
    case 5:
    case 6:
        console.log("Pripada drugoj cetvrtini")
        break;
    case 7:
    case 8:
    case 9:
        console.log("Pripada trecoj cetvrtini")
        break;
    case 10:
    case 11:
    case 12:
        console.log("Pripada cetvrtoj cetvrtini")
        break;
    default:
        console.log("Pogresan unos!")
        break;
        
}