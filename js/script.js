// creare una variabile che rappresenti la lista 
let buzzinnerEl = document.getElementById("buzzList");
//creo quello che dovrebbe essere il pattern del ciclo
for (let i = 1; i <= 100; i++) {
    //devo inserire nel HTML un contenitore degli elementi della lista
    let altroDiv = document.createElement('div');

    //adesso bisogna inserirlo dentro buzzList
    buzzinnerEl.append(altroDiv);

    //dare un valore all'interno di altroDiv
    altroDiv.innerHTML = "fizz " + (i);
}