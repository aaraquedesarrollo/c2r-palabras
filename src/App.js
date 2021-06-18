import { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { Info } from "./components/Info";
import { Lista } from "./components/Lista";
import { Resultado } from "./components/Resultado";
import { palabrasAPI } from "./datos/palabras";

function App() {
  const [palabras, setPalabras] = useState(palabrasAPI);
  const [palabrasResultado, setPalabrasResultado] = useState([]);

  const cantidadMismaPalabra = (palabra) => {
    if (palabrasResultado.length !== 0) {
      let maximo = palabra.maxPrints;
      let cantidad = 0;
      if (maximo === null || maximo === "0" || maximo === "") {
        return true;
      }
      maximo = parseInt(maximo);
      palabrasResultado.reduce((dummy, palabraComparacion) => {
        if (palabra.palabra === palabraComparacion.palabra) {
          ++cantidad;
        }
        return cantidad;
      });
      console.log(cantidad, maximo);
      return cantidad < maximo ? true : false;
    }

    return true;
  };

  const validacionPalabra = (palabra) => {
    const palabrasTexto = palabras.map((palabra) => palabra.palabra);
    let valida = !palabrasTexto.includes(palabra.palabra);
    if (!valida) {
      return false;
    }

    if (/\s/.test(palabra.palabra)) {
      return false;
    }
    return true;
  };
  const anyadirPalabraNueva = (e, palabra) => {
    e.preventDefault();
    if (!validacionPalabra(palabra)) {
      return;
    }
    setPalabras([...palabras, palabra]);
  };

  const anyadePalabra = (palabra) => {
    const palabrasTemp = [...palabrasResultado];
    const palabraTemp = {
      ...palabra,
      idCopia: encuentraCantidad(palabrasResultado, palabra),
    };
    if (cantidadMismaPalabra(palabraTemp)) {
      palabrasTemp.push(palabraTemp);
      setPalabrasResultado(palabrasTemp);
    }
  };

  const encuentraCantidad = (palabrasResultado) => {
    let idMaximo = 1;
    if (palabrasResultado.length !== 0) {
      palabrasResultado.reduce((palabraAnterior, palabraComparacion) => {
        if (idMaximo < palabraComparacion.idCopia) {
          idMaximo = palabraComparacion.idCopia;
        }
        return idMaximo;
      });
      return ++idMaximo;
    } else {
      return 1;
    }
  };

  const borraPalabra = (palabra) => {
    console.log(palabra);
    setPalabrasResultado(
      palabrasResultado.filter(
        (palabraComparacion) => palabra.idCopia !== palabraComparacion.idCopia
      )
    );
  };

  return (
    <>
      <section className="palabras">
        <Lista palabras={palabras} anyadePalabra={anyadePalabra} />
        <Resultado palabras={palabrasResultado} borraPalabra={borraPalabra} />
      </section>
      <Formulario anyadirPalabraNueva={anyadirPalabraNueva} />
      <Info palabras={palabrasResultado} />
    </>
  );
}

export default App;
