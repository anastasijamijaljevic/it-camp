operacija = 0;

while (true) {
    alert("Izaberite operaciju");
    alert("1. Sabiranje, 2.Oduzimanje, 3.Mnozenje, 4.Deljenje, 5.Izadji iz programa")
    operacija = Number(prompt("Unesite operaciju koju zelite da izvrsite:"));
    if (operacija === 1) {
        broj1 = Number(prompt("Unesite prvi broj:"));
        broj2 = Number(prompt("Unesite drugi broj:"));
        console.log(broj1 + broj2)
    } else if (operacija === 2) {
        broj1 = Number(prompt("Unesite prvi broj:"));
        broj2 = Number(prompt("Unesite drugi broj:"));
        console.log(broj1 - broj2);
    } else if (operacija === 3) {
        broj1 = Number(prompt("Unesite prvi broj:"));
        broj2 = Number(prompt("Unesite drugi broj:"));
        console.log(broj1 * broj2);
    } else if (operacija === 4) {
        broj1 = Number(prompt("Unesite prvi broj:"));
        broj2 = Number(prompt("Unesite drugi broj:"));
        console.log(broj1 / broj2);
    } else if (operacija === 5) {
        break;
    }
}