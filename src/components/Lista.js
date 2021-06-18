import PropTypes from "prop-types";

export const Lista = (props) => {
  const { palabras, anyadePalabra } = props;
  return (
    <ul className="lista-palabras">
      {palabras.map((palabra) => {
        return palabra.esLenguajeProgramacion ? (
          <li
            data-lenguaje="si"
            onClick={() => anyadePalabra(palabra)}
            key={palabra.palabra}
          >
            {palabra.palabra}
          </li>
        ) : (
          <li onClick={() => anyadePalabra(palabra)} key={palabra.palabra}>
            {palabra.palabra}
          </li>
        );
      })}
    </ul>
  );
};

Lista.propTypes = {
  palabras: PropTypes.arrayOf(
    PropTypes.shape({
      palabra: PropTypes.string.isRequired,
      esLenguajeProgramacion: PropTypes.bool.isRequired,
      maxPrints: PropTypes.number,
      idCopia: PropTypes.number,
    })
  ).isRequired,
  anyadePalabra: PropTypes.func.isRequired,
};
