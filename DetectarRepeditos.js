let arreglo=[4, 5, 2, 4, 5, 9, 9, 4, 4];

const detectarRepetidos =(array,numero,numeroDeVeces)=>{
  let contador=0;
  array.findIndex(valor=>{(valor==numero) ? contador++ : null});
  console.log(contador);
  if(contador>=numeroDeVeces){
    return true;
  }else{
    return false;
  }
}

console.log(detectarRepetidos(arreglo, 4, 5)) // Regresa false;
console.log(detectarRepetidos(arreglo, 4, 4)) // Regresa true;
console.log(detectarRepetidos(arreglo, 4, 3)) // Regresa true;
console.log(detectarRepetidos(arreglo, 9, 2)) // Regresa true