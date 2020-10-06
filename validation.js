function validateFix(chain){
    const array = chain.split("");
    array.reverse();
    for(let i = 0; i < array.length; i++){
        if( i%2 != 0){
            array[i] = array[i]*2;
            if(array[i] >= 10){
                if(array[i] == 10){
                    array[i] = 1;
                }else{
                    array[i] = 1 + (array[i]-10);
                }
            }
        }
    }
    return validCard(array);
}

function validCard(array){
    let result = 0, cont = 0;    
    for(let j = 0; j < array.length; j++){
        cont = cont + parseInt(array[j]);
     }
     if (cont%10 == 0){
        result = 1;
     }
     return result;
}

function hideArray(chain){
    const array = chain.split("");
    for(let i = 0; i < array.length - 4; i++){
        array[i] = '#';
    }
    console.log(array);
    return array;
}

function onlyNumbers(e){
    const key = window.event ? e.which : e.keyCode;
    if(key < 48 || key > 57){
        e.preventDefault();
    }
}

function closeWindow(){
    document.getElementById('cardPopUp').style.display = "none";
}