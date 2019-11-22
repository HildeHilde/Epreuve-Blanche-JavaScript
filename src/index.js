// j'importe les données
import { makis } from './app/data/makis';

// j'appelle l'element app et je créé un titre
const app = document.getElementById('app');

const restau = document.createElement('h1');
restau.innerText = 'La Cantine';
app.appendChild(restau);

// chaque maki est un plat
const plat = document.createElement('ul');

makis.forEach((maki) => {
  plat.appendChild(document.createElement('li')).innerHTML = `<img src=${maki.image}><h2>${maki.nom}</h2><p>${maki.description}</p><p id="prix">${makis.prix}euros</p>`;
  app.appendChild(plat);
});

//   const plat = document.createElement('div');
//   const nom = document.createElement('h2');
//   nom.innerHTML = maki.nom;

//   const prix = document.createElement('p');
//   prix.innerHTML = `${maki.prix} euros`;

//   plat.appendChild(nom);
//   plat.appendChild(prix);
//   app.appendChild(plat);
