import React from "react";

const Paginacion = (props) => {
  return (
    <div className="py-3">
      <button
        id="Boton"
        onClick={props.paginaAnterior}
        type="butoon"
        className="btn btn-info mr-1"
      >
        Previuos &larr;
      </button>
      <button
        onClick={props.paginaSiguiente}
        type="butoon"
        className="btn btn-info"
      >
        Next &rarr;
      </button>
    </div>
  );
};

export default Paginacion;

//video en 1hora 2min
