import { Component } from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component {
  state = {
    termino: "",
    imagenes: [],
    pagina: "",
  };

  scroll = () => {
    const elemento = document.querySelector(".jumbotron");
    elemento.scrollIntoView("smooth", "start");
  };

  paginaAnterior = () => {
    let pagina = this.state.pagina;
    //si la pagina es 1 no ir hacia atras!!
    if (pagina === 1) return null;

    pagina -= 1;

    this.setState(
      {
        pagina,
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );

    console.log(pagina);
  };

  paginaSiguiente = () => {
    //Leer codigo de pagina actual
    let pagina = this.state.pagina;
    //Sumar uno a la pagina actual
    pagina += 1;
    //Agregar el cambio al state
    this.setState(
      {
        //siempre para hacer cambios en el state, se utiliza setState!!
        pagina,
      },
      () => {
        this.consultarApi();
        this.scroll();
      }
    );

    console.log();
  };

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=29269578-7e516612a0bfb86e9e4651c85&q=${termino}&per_page=30&page=${pagina}`;

    console.log(url);
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ imagenes: resultado.hits }));
  };

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino: termino,
        pagina: 1,
      },
      () => {
        this.consultarApi();
      }
    );
  };

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Image Browser</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;
