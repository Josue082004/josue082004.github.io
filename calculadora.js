function calcularConsumo() {
    var dispositivo = document.getElementById('dispositivo').value;
    var potencia = document.getElementById('potencia').value;
    var tiempo = document.getElementById('tiempo').value;

    var consumo = potencia * tiempo;
    
    document.getElementById('resultado').innerHTML = 'El consumo de energía para el ' + dispositivo + ' es: ' + consumo + ' vatios-hora';
}
