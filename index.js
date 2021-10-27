const mismaDiferencia = (array) =>{
  let diferencia=(parseFloat(array[1].toFixed(2))-parseFloat(array[0]).toFixed(2)).toFixed(2);
  let bandera=false;
  for(let i=0;i<array.length-1;i++){
    c1=(parseFloat(array[i])+parseFloat(diferencia)).toFixed(2);
    c2=array[i+1].toFixed(2);
    if(c1==c2){
      bandera=true;
    }else{
      bandera=false;
    }
  }
  if(bandera){
    return true;
  }else{
    return false;
  }
}

console.log(mismaDiferencia([ 1, 3, 5 ])); // true
console.log(mismaDiferencia([ 194, 54, 23, 7, 3, 6, 8 ])); // false
console.log(mismaDiferencia([44, 37, 30, 23 ])); // true
console.log(mismaDiferencia([ -2.3, -1.1, 0.1, 1.3, 2.5, 3.7 ])); // true
console.log(mismaDiferencia([ 1, 8 ])); // true
console.log(mismaDiferencia([ 3, 2, 1, 2, 3, 4, 3])); // true