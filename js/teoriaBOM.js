let contador = 1

const Saludar = () => {
  document.write("<br> Hola Mundo");
  if (contador === 5) {
    window.clearInterval(identificador)     
}
};
// Saludar();

window.setTimeout(Saludar, 3000);

// setTimeout(function () {
//   Saludar("algo");
// }, 4000);

// setTimeout(() => {
//   document.write("<br> Hola Mundo");
// }, 5000);

let identificador =window.setInterval(Saludar,4000)
