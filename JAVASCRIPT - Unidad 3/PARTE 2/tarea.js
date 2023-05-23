/* Ejercicio 1*/

function cambiarColorDeFondo(color) {
  document.body.style.backgroundColor = color;
}

/* Ejercicio 2*/

function contarCaracteres() {
  const miTextarea = document.getElementById("miTextarea");
  const contador = document.getElementById("contador"); 
  miTextarea.addEventListener("input", () => {
    contador.innerText = miTextarea.value.length;
  });
};

/* Ejercicio 3*/


function alumnosAprobados(alumnos){
  const alumnosAprobados = alumnos.filter(alumno => alumno.nota >= 7).map(alumno => alumno);
  return alumnosAprobados ;
}


var alumnos = [

    {
  
      nombre: 'Juan Gomez',
  
      nota: 7
  
    }, {
  
      nombre: 'Pedro Rodriguez',
  
      nota: 4
  
    }, {
  
      nombre: 'Roxana García',
  
      nota: 8
  
    }, {
  
      nombre: 'Luciano Lopez',
  
      nota: 5
  
    }, {
  
      nombre: 'Fernanda Gimenez',
  
      nota: 6
  
    }, {
  
      nombre: 'Florencia Martinez',
  
      nota: 10
  
    }, {
  
      nombre: 'Raul Sanchez',
  
      nota: 7
  
    }, {
  
      nombre: 'Sandra Figueroa',
  
      nota: 8
  
    }
  
  ];

  console.log(alumnosAprobados(alumnos));