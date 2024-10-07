//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 6;
// Función para obtener un número secreto desde una API
async function obtenerNumeroSecreto() {
    try {
        const response = await fetch(`https://www.random.org/integers/?num=1&min=1&max=${numeroMaximoPosible}&col=1&base=10&format=plain&rnd=new`);
        const data = await response.text();
        numeroSecreto = parseInt(data);
    } catch (error) {
        console.error('Error al obtener el número secreto:', error);
        alert('No se pudo obtener el número secreto. Intenta de nuevo más tarde.');
    }
}

async function jugar() {
    await obtenerNumeroSecreto(); // Esperamos a que se obtenga el número secreto

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
}