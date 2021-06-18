import { useEffect, useState } from "react";
import { Formulario } from "./components/Formulario";
import { Info } from "./components/Info";
import { Lista } from "./components/Lista";
import { Resultado } from "./components/Resultado";
import { palabrasAPI } from "./datos/palabras";

function App() {
  const [palabras, setPalabras] = useState(palabrasAPI);
  const [palabrasResultado, setPalabrasResultado] = useState([]);

  const anyadePalabra = (palabra) => {
    const palabrasTemp = [...palabrasResultado];
    const palabraTemp = {
      ...palabra,
      idCopia: encuentraCantidad(palabrasResultado, palabra),
    };
    palabrasTemp.push(palabraTemp);
    setPalabrasResultado(palabrasTemp);
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
      <Formulario />
      <Info />
    </>
  );
}

export default App;
