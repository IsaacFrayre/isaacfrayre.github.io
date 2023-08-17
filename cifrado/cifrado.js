function cifrarMensaje(mensajet, NumCifrado) {
    mensajet = mensajet.toLowerCase();
    let mensajetCifrado = '';

    for (let i = 0; i < mensajet.length; i++) {
      const msj = mensajet[i];
      const msjCode = msj.charCodeAt(0);

      if (msjCode >= 97 && msjCode <= 122) {
        let nuevoMsj= msjCode + NumCifrado;

        if (nuevoMsj > 122) {
          nuevoMsj = nuevoMsj - 26;
        }

        const msjCifrado = String.fromCharCode(nuevoMsj); 
        mensajetCifrado += msjCifrado;
      } else {
        mensajetCifrado += msj;
      }
    }

    return mensajetCifrado;       
}        

 
function cifrar() {
    const mensajeOriginal = document.getElementById("mensajet").value;
    const NumCifrado = parseInt(document.getElementById("NumCifrado").value);
    const mensajetCifrado = cifrarMensaje(mensajeOriginal, NumCifrado);
    document.getElementById("mensajetCifrado").textContent = mensajetCifrado;
}


function descifrarMensaje(mensajet, NumCifrado) {
    mensajet = mensajet.toLowerCase();
    let mensajetDescifrado = '';

    for (let i = 0; i < mensajet.length; i++) {
        const msj = mensajet[i];
        const msjCode = msj.charCodeAt(0);

        if (msjCode >= 97 && msjCode <= 122) {
            let nuevoMsj = msjCode - NumCifrado;

            if (nuevoMsj < 97) {
                nuevoMsj = nuevoMsj + 26;
            }

            const msjDescifrado = String.fromCharCode(nuevoMsj);
            mensajetDescifrado += msjDescifrado;
        } else {
            mensajetDescifrado += msj;
        }
    }

    return mensajetDescifrado;
}


function descifrar() {
    const mensajetCifrado = document.getElementById("mensajetCifrado").textContent;
    const NumCifrado = parseInt(document.getElementById("NumCifrado").value);
    const mensajeOriginal = descifrarMensaje(mensajetCifrado, NumCifrado);
    document.getElementById("mensajetDescifrado").textContent = mensajeOriginal;
}

function playaudio() {
    document.getElementById('ip').play()
}