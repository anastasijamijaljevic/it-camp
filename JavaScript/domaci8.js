function OkreniBroj(broj) {
    brojString=String(broj)
    temp = " "
    for (let i=brojString.length-1; i>=0; i--) {
        temp+=brojString[i]
    }
  console.log(temp)
}

function Palindrom (rec) {
    rec=rec.toLowerCase()
    for (let i=0; i<rec.length/2; i++) {
        if(rec[i]!=rec[rec.length-1-i]) {
            console.log("Nije palnidrom")
            break;
        }
    }
    console.log("Jeste palindrom")
}

OkreniBroj(234)
Palindrom("Ana")