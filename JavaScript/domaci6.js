niz = [10, 8, 2, 3, 78, 98, 1, 7, 4, 5];
min = 0;
max = 0;
min = max = niz[0];
for (let i = 0; i < niz.length; i++) {
    if (niz[i] < min) {
        min = niz[i];
    } else if (niz[i] > max) {
        max = niz[i];
    }
}

console.log("Najveci element je", max);
console.log("Najmanji element je", min);