document.addEventListener('DOMContentLoaded', function(){
    //obtener la referencia de los elementos de la página
    const inputBox = document.getElementById('inputBox');
    const showBtn = document.getElementById('showBtn');
    const outputBox = document.getElementById('outputBox');
    //Añadir un observacdor al botón
    showBtn.addEventListener('click', function(){
        const message = inputBox.value;
        console.log('Dato ingresadi', message);
        outputBox.textContent = message;
        

    })
})
