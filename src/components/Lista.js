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
