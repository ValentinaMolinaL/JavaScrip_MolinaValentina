function superDigit(n, k) {
    if (n.length === 1){
        return parseInt(n);

    }
    let sum = 0;
    for (let i =0; i < n.length; i ++){
        sum+= parseInt(n[i]);
    }
    sum *= k;
    return superDigit(sum.toString(),1);
}
    var numero = prompt("ingresa el numero 1");
    var repeticiones = prompt("ingresa el numero de repeticiones");
    console.log(superDigit(numero, repeticiones));
    
    