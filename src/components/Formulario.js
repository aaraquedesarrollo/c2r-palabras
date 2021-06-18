export const Formulario = () => {
  return (
    <section className="crear-palabras">
      <form className="form-palabras">
        <div className="form-grupo">
          <input type="text" placeholder="Nueva palabra" required />
        </div>
        <div className="form-grupo">
          <select required>
            <option value="">Máximo de veces</option>
            <option value="0">Sin límite</option>
            <option value="1">1 vez</option>
            <option value="2">2 veces</option>
            <option value="3">3 veces</option>
          </select>
        </div>
        <div className="form-grupo">
          <label>
            <input type="checkbox" /> Es un lenguaje de programación
          </label>
        </div>
        <div className="form-grupo">
          <button type="submit" disabled>
            Crear
          </button>
        </div>
      </form>
    </section>
  );
};
