import {searchCity} from "./search_city";

export function searchForSuggestion(city) {
    fetch(`https://geo.api.gouv.fr/communes?nom=${city}&fields=departement&boost=population&limit=5`)
    .then(res => res.json())
    .then(data => {
      const section = document.querySelector('#suggestions');
      section.innerHTML = '';
      if (data) {
        data.forEach(o => generateSuggestion(o));
      }
    })
    .catch(error => console.log(error));
  }
  
  function generateSuggestion(data) {
    const {
      nom,
      code,
      departement: {
        code: codeDepartement,
        nom: nomDepartement
      }
    } = data;
  
    const card = document.createElement('div');
    const ville = document.createElement('span');
    const departement = document.createElement('span');
    ville.innerHTML = `${nom} (${code})`;
    departement.innerHTML = `${nomDepartement || '??'} (${codeDepartement || '??'})`;
    card.setAttribute('class', 'flex flex-col min-w-1/6 h-16 px-2 items-center justify-center cursor-pointer');
    departement.setAttribute('class', 'text-gray-400 text-sm')
    card.appendChild(ville);
    card.appendChild(departement);
    card.addEventListener('click', () => {
      $('#input-search').val(nom);
      searchCity(nom);
      searchForSuggestion(nom);
    });
  
    const section = document.querySelector('#suggestions');
    section.appendChild(card);
  }