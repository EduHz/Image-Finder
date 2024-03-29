import React, { Component } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();
    //tomamos el valor del input
    const termino = this.busquedaRef.current.value;
    // Y lo enviamos al componente principal
    this.props.datosBusqueda(termino);
  };

  render() {
    return (
      <form onSubmit={this.obtenerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg"
              placeholder="Search you image. Example: Cat"
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Search"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;

//52:08 video
