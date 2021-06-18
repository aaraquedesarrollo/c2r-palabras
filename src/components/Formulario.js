import { useState } from "react";
import PropTypes from "prop-types";

export const Formulario = (props) => {
  const { anyadirPalabraNueva } = props;
  const [maximoVeces, setMaximoVeces] = useState(0);
  const [esUnLenguaje, setEsUnLenguaje] = useState(false);
  const [palabra, setPalabra] = useState("");

  const palabraObjeto = {
    palabra: palabra,
    esLenguajeProgramacion: esUnLenguaje,
    maxPrints: maximoVeces,
  };

  return (
    <section className="crear-palabras">
      <form
        className="form-palabras"
        noValidate
        onSubmit={(e) => anyadirPalabraNueva(e, palabraObjeto)}
      >
        <div className="form-grupo">
          <input
            type="text"
            placeholder="Nueva palabra"
            value={palabra}
            onChange={(e) => setPalabra(e.target.value)}
            required
          />
        </div>
        <div className="form-grupo">
          <select
            value={maximoVeces}
            onChange={(e) => setMaximoVeces(e.target.value)}
            required
          >
            <option value="">Máximo de veces</option>
            <option value="0">Sin límite</option>
            <option value="1">1 vez</option>
            <option value="2">2 veces</option>
            <option value="3">3 veces</option>
          </select>
        </div>
        <div className="form-grupo">
          <label>
            <input
              value={esUnLenguaje}
              onChange={(e) => setEsUnLenguaje(e.target.checked)}
              type="checkbox"
            />{" "}
            Es un lenguaje de programación
          </label>
        </div>
        <div className="form-grupo">
          <button type="submit" disabled={!palabra}>
            Crear
          </button>
        </div>
      </form>
    </section>
  );
};

Formulario.propTypes = {
  anyadirPalabraNueva: PropTypes.func.isRequired,
};
