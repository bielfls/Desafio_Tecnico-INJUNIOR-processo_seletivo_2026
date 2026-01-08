function encontrarElementoUnico(array){
    //array adicionando elementos e tirando conforme encontra um elemento igual
    let array2 = [];
    for(let i=0; i<array.length; i++){
        if(!(array2.includes(array[i]))){
            array2.push(array[i]);
        }
        else{
            let index = array2.indexOf(array[i]);
            array2.splice(index, 1);
        }
    }
    console.log(array2[0]);
    return array2[0];
}