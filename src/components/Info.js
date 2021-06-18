import PropTypes from "prop-types";

export const Info = (props) => {
  const { palabras } = props;
  let cantidad = 0;

  const numeroCaracteres = () => {
    for (const i in palabras) {
      cantidad += palabras[i].palabra.length;
    }

    return cantidad;
  };

  const longitudMedia = () => {
    if (palabras.length !== 0) {
      return (cantidad / palabras.length).toFixed(2);
    }
    return 0;
  };

  const palabrasLenguajesProgramacion = palabras
    .filter((palabra) => palabra.esLenguajeProgramacion)
    .map((palabra) => palabra.palabra)
    .sort()
    .reverse();
  return (
    <section className="info">
      <ul>
        <li>
          Nº de palabras <span>{palabras.length}</span>
        </li>
        <li>
          Nº de caracteres <span>{numeroCaracteres()}</span>
        </li>
        <li>
          Longitud media <span>{longitudMedia()}</span>
        </li>
        <li>
          Contiene {palabrasLenguajesProgramacion.length} lenguaje/s de
          programación
          <ul>
            {palabrasLenguajesProgramacion.map((palabra) => (
              <li>{palabra}</li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  );
};

Info.propTypes = {
  palabras: PropTypes.arrayOf(
    PropTypes.shape({
      palabra: PropTypes.string.isRequired,
      esLenguajeProgramacion: PropTypes.bool.isRequired,
      maxPrints: PropTypes.number,
      idCopia: PropTypes.number,
    })
  ).isRequired,
};
