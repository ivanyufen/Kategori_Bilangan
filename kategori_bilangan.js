
let result = []; //array utk menampung hasil nya
var i = 0; //counter untuk menentukan apakah bilangan tersebut termasuk bulat/cacah dll
var prime = []; //array utk tampung hasil modulus suatu bilangan, kalau di array ini ada value "0", berarti bilangan tersebut bukan prima karena habis dibagi angka lain selain diri sendiri dan 1

let bilangan = (x) =>{

    //cek bilangan bulat
        if(isNaN(x)==false && (x % 1 == 0)){ //validasi, harus bilangan real / number (bukan romawi dll) dan gaboleh ada koma
            result.push("Bulat");
            i++;
        }


    //cek bilangan cacah
        if (i == 1){ 
            if(x >= 0){ //bilangan bulat yg positif/tidak negatif 
                result.push("Cacah");
                i++;
            }
        }

    //cek bilangan negatif
        if (i == 1){ 
            if(x < 0){ //bilangan bulat yg positif/tidak negatif 
                result.push("Negatif");
                i++;
            }
        }


    //cek bilangan asli
        if (i == 2){
            if(x != 0 && x>0){ //bilangan cacah yg bukan 0
                result.push("Asli");
                i++;
            }
        }

    //cek bilangan 0
    if(x == 0){ //bilangan 0
        result.push("Nol");
        result.push("Genap")
    }

    //cek bilangan ganjil
        if(i == 3){ 
            if(x % 2 !=0 && x > 0){ //bilangan yg tidak habis dibagi dua dan positif
                result.push("Ganjil")
            }
        }
    

    //cek bilangan genap
    if(i == 3){ 
        if(x % 2 == 0){ //bilangan yg habis dibagi dua atau 0
            result.push("Genap")
        }
    }


    //cek bilangan prima
    if(x == 1){
        i++; //maksudnya kalau bilangan bukan prima, i nya cuma nambah satu
        result.push("Bukan Prima");
    }
    if(x < 1){
        i++;
        result.push("Bukan Prima");
    }
    if(x == 2)
    {
        i+=2; //maksudnya kalau bilangan prima, i nya nambah dua
        result.push("Prima");
    }
    if(x == 3)
    {
        i+=2;
        result.push("Prima");
    }
    else if(x > 3)
    {
        for(counter = 2; counter < x; counter++) {
            prime.push(x % counter);
        }
        if(prime.includes(0) == true){
            result.push("Bukan Prima");
            i++;
        }
        else{
            result.push("Prima");
            i+=2;
        }
    }

    //cek bilangan komposit
        if(x > 1 && i == 4) //kalau i nya 4, berarti ketambahnya cuma 1, alias bilangannya bukan prima (bilangan komposit gaboleh bilangan prima dan harus lebih besar dari 1)
        {
            result.push("Komposit");
        }


    return result;
    result = [];

}


console.log(bilangan(13)) //tes angka 13, akan keluar [ 'Bulat', 'Cacah', 'Asli', 'Ganjil', 'Prima' ]
// console.log(bilangan(-7)) //tes angka -7, akan keluar [ 'Bulat', 'Negatif', 'Bukan Prima' ]