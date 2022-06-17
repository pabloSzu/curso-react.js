export default function Pelicula(props) {

    return (
      <div className="movie-item-style-2">
        <img src={props.img} alt="" />
        <div className="mv-item-infor">
          <h6>
            <a href="moviesingle.html">
              {props.titulo}
            </a>
          </h6>
          <p className="rate">
            <i className="ion-android-star"></i>
            <span>{props.calificacion}</span> /10
          </p>
          <p className="describe">{props.children}</p>
          <p className="run-time"> Duración: {props.duracion}    .     <span>MMPA: PG-13 </span>    .
            <span>Fecha: {props.fecha}</span></p>
          <p>Director: <a href="#">{props.director}</a></p>
          <p>Stars: <a href="#">{props.actores}</a></p>
        </div>
      </div>
    )
  }

//export default para poder exportarlo y usarlo en otros archivos
/*
export default function Pelicula() {
}

o

function Pelicula() {
}
export default Pelicula;


{props.children} toma los hijos (osea el HTML que ponemos luego de las propiedades en App.js)
Ej: 
<Pelicula actor="blabla">
    <p>Hola yo sería el children</p>
</Pelicula>
*/ 