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
