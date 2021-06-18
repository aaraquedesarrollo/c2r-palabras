import PropTypes from "prop-types";

export const Resultado = (props) => {
  const { palabras, borraPalabra } = props;
  return (
    <ul className="resultado">
      {palabras.map((palabra) => {
        return palabra.esLenguajeProgramacion ? (
          <li
            data-lenguaje="si"
            key={palabra.idCopia}
            onClick={() => borraPalabra(palabra)}
          >
            {palabra.palabra}
          </li>
        ) : (
          <li key={palabra.idCopia} onClick={() => borraPalabra(palabra)}>
            {palabra.palabra}
          </li>
        );
      })}
    </ul>
  );
};

Resultado.propTypes = {
  palabras: PropTypes.arrayOf(
    PropTypes.shape({
      palabra: PropTypes.string.isRequired,
      esLenguajeProgramacion: PropTypes.bool.isRequired,
      maxPrints: PropTypes.number,
      idCopia: PropTypes.number,
    })
  ).isRequired,
  borraPalabra: PropTypes.func.isRequired,
};
