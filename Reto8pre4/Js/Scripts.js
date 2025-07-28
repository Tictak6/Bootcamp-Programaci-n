document.addEventListener('DOMContentLoaded', function(){
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');
    const resultText = document.getElementById('resultText');

    window.calcular = function (operation) {
        const numb1 = parseFloat(number1.value.trim());
        const numb2 = parseFloat(number2.value.trim());
        
        if(isNaN(numb1) || 
           isNaN(numb2)){
            resultText.textContent = 'Valor invalido'
            return;     
           }
        let result;
        switch (operation){
            case 'sumar':
                result = numb1 + numb2;
                break;
            case 'restar':
                result = numb1 - numb2;
                  break;
            case 'multiplicar':
                result = numb1 * numb2;
                  break;
            case 'dividir':
                if (numb2 ===0){
                    resultText.textContent='Match Error';
                    return;
                }
                     result = numb1 / numb2;
                                      break;
            default:
              result="Operación no valida";      
                }        
                resultText.textContent = result;
        };

});
