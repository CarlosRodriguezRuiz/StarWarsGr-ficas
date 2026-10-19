
// EJERCICIO 1 - Películas de Star Wars

async function getPeliculas() {
  const response = await fetch("https://swapi.info/api/films");
  const data = await response.json();

  let titulos = [];
  let annos = [];

  data.forEach((pelicula) => {
    titulos.push(pelicula.title);
    annos.push(Number(pelicula.release_date.slice(0, 4)));
  });

  new Chartist.Line(".graficaPeliculas", {
    labels: titulos,
    series: [annos],
  });
}

getPeliculas();


// EJERCICIO 2 - Personajes de Star Wars
async function getPersonajes() {
  const response = await fetch("https://swapi.info/api/people");
  const data = await response.json();

  let nombres = [];
  let peliculas = [];

  for (let i = 0; i < 10; i++) {
    nombres.push(data[i].name);
    peliculas.push(data[i].films.length);
  }

  new Chartist.Bar(".graficaPersonajes", {
    labels: nombres,
    series: [peliculas],
  });
}

getPersonajes();