document.addEventListener('DOMContentLoaded', function(){
    const number1 = document.getElementById('number1');
    const number2 = document.getElementById('number2');
    const addButton = document.getElementById('addButton');
    const resultText = document.getElementById('resultText');

    addButton.addEventListener('click', function(){
        const numb1 = number1.value.trim();
        const numb2 = number2.value.trim();
        if(numb1=== '' || 
           numb2=== '' ||
           isNaN(Number(numb1)) || 
           isNaN(Number(numb2))){
            resultText.textContent = 'Valor invalido'
            return;     
        }
        let result = Number(numb1) + Number(numb2);
        resultText.textContent=result;
    });
});