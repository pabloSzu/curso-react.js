import logo from './logo.svg';
import './App.css';
import Pelicula from './Pelicula';
import PageWrapper from './PageWrapper';

function App() {

  let peliculas = [
    {
      "titulo": "oblivion (2012)",
      "calificacion": "8.1",
      "director": "Joss Whedon",
      "actores": "Robert Downey Jr., Chris Evans, Chris Hemsworth",
      "fecha": "1 May 2015",
      "duracion": "2h 21min",
      "img": "images/uploads/mv1.jpg",
      "descripcion": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity..."
    },
    {
      "titulo": "into the wild (2014)",
      "calificacion": "7.5",
      "director": "Joss Whedon",
      "actores": "Robert Downey Jr., Chris Evans, Chris Hemsworth",
      "fecha": "1 May 2015",
      "duracion": "2h 21min",
      "img": "images/uploads/mv2.jpg",
      "descripcion": "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity..."
    },
  ]

  return (
    <PageWrapper>

      {peliculas.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
          director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
          img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}
      
    </PageWrapper>
  );
}

export default App;
