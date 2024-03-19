// Selection des éléments
const form = document.querySelector('form');
const resultat = document.getElementById('resultat');
const loader = document.getElementById('loader');
const bilan = document.getElementById('bilan');
const btnAnnuler = document.getElementById('btnAnnuler');
const btnCalculer = document.getElementById('btnCalculer');
const chargeElectrique = document.getElementById('chargeElectrique');
const p = resultat.querySelector('p');
const tableauEquiment = document.querySelector('table tbody');

const equipementTable = [] ;


/*form.addEventListener('submit', function(e) {

  // Prévenir le rechargement de page
  e.preventDefault();

  // Afficher le loader
  disabledBtnCalculer('disabled') ;
  loaderStatus('show') ;
  pTagStatus('hide') ;

  // Récupérer les données du formulaire
  const surface = form.surface.value;
  const usage = form.usage.value;
  const etages = form.etages.value;

  // Simuler le calcul asynchrone
  setTimeout(function() {

    // Calcul de la charge électrique
    let charge;
    
    // Appliquer la formule de calcul
    
    // Cacher le loader et afficher le résultat 
    loaderStatus('hide');
    chargeElectrique.innerHTML = `${charge} kVA`;
    bilanStatus('show') ;
    backBtnStatus('show') ;

  }, 2000);

});*/

/*form.addEventListener('reset', function(e) {
  
    pTagStatus('show') ;
    loaderStatus('hide') ;
    bilanStatus('hide') ;
    backBtnStatus('hide') ;
    disabledBtnCalculer('undisabled') ;
    
  
});*/

function addEquipement() {
  // Récupération des éléments sur un équipement
  let intitule = document.getElementById('intitule') ;
  let qte = document.getElementById('qte') ;
  let pu = document.getElementById('pu') ;
  let rendement = document.getElementById('rendement') ;

  // Construction de l'objet equipement
  let  equipement = {
    'intitule': intitule.value,
    'qte': qte.value,
    'pu': pu.value,
    'rendement': rendement.value,
  }

  // Ajout de l'objet dans le tableau d'équipements
  equipementTable.push(equipement) ;

  // Créer une nouvelle ligne
  const row = document.createElement('tr');

  // Ajouter les cellules avec les données 
  row.innerHTML = `
    <td>${equipement.intitule}</td>
    <td>${equipement.qte}</td> 
    <td>${equipement.pu}</td>
    <td>${equipement.rendement}</td>
    <td><button class='btn btn-danger btn-xm'>Supprimer</button></td>
  `;

  // Ajouter la ligne au tableau
  tableauEquiment.appendChild(row);


  // Vider les champs du formulaire
  intitule.value='';
  qte.value= 0;
  pu.value= 0;
  rendement.value= 0;

}


function loaderStatus(status) {
    status === 'show' ? loader.classList.remove('d-none') : loader.classList.add('d-none') ;
}

function bilanStatus (status) {
    // loader.classList.add('d-none') ;
    status === 'show' ? bilan.classList.remove('d-none') : bilan.classList.add('d-none') ;
}

function pTagStatus(status) {
    status === 'show' ? p.style.display = 'block' : p.style.display = 'none' ;
}

function backBtnStatus(status) {
    status === 'show' ? btnAnnuler.innerHTML = "Retour" : btnAnnuler.innerHTML = "Annuler" ; 
}

function disabledBtnCalculer(status) {
    status === 'disabled' ? btnCalculer.setAttribute("disabled", "") : btnCalculer.removeAttribute("disabled") ;
}
