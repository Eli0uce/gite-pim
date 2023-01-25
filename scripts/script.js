// Function Terms and Conditions
function showTermsAndConditions() {
  Swal.fire({
    title: "Conditions générales d'utilisation",
    html:
      '<p>Les présentes conditions générales d’utilisation (ci-après les « CGU ») ont pour objet l’encadrement juridique des modalités de mise à disposition du site et des services par <b>Hotel</b> et de définir les conditions d’accès et d’utilisation des services par « l’Utilisateur ».</p>' +
      '<p>Les présentes CGU sont accessibles sur le site à la rubrique «CGU».</p>' +
      '<p>Toute inscription ou utilisation du site implique l’acceptation sans aucune réserve ni restriction des présentes CGU par l’utilisateur. Lors de l’inscription sur le site via le Formulaire d’inscription, chaque utilisateur accepte expressément les présentes CGU en cochant la case précédant le texte suivant : « Je reconnais avoir lu et compris les CGU et je les accepte ».</p>' +
      '<p>En cas de non-acceptation des CGU stipulées dans le présent contrat, l’Utilisateur se doit de renoncer à l’accès des services proposés par le site.</p>' +
      '<p><b>Hotel</b> se réserve le droit de modifier unilatéralement et à tout moment le contenu des présentes CGU.</p>',
    focusConfirm: false,
    confirmButtonText: "J'ai compris",
    confirmButtonColor: "#3c913a",
  });
}

// About Us
function showAboutUs() {
  Swal.fire({
    title: "À propos de nous",
    html:
      '<p>Le Gîte Pim vous permet de louer votre chambre d’hôtel en ligne. Nous sommes une entreprise qui a pour but de faciliter la vie de nos clients en leur permettant de réserver une chambre d’hôtel en ligne.</p>' +
      '<p>Notre site est disponible 24h/24 et 7j/7. Nous sommes joignables par téléphone au 01 23 45 67 89</p>' +
      '<p>Notre équipe est composée de 3 personnes.</p>',
    focusConfirm: false,
    confirmButtonText: "J'ai compris",
    confirmButtonColor: "#3c913a",
  });
}

// Make a donation
function showDonation() {
  Swal.fire({
    icon: 'success',
    title: "Faire un don",
    html:
      '<p>Vous pouvez faire un don en cliquant sur le bouton ci-dessous.</p>' +
      '<p>Vous pouvez également nous faire un don en nous envoyant un chèque à l’adresse suivante : <b>15 rue Jean Masdak</b></p>',
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: "Faire un don",
    confirmButtonColor: "#3c913a",
    cancelButtonText: "Annuler",
    cancelButtonColor: "#d33",
    preConfirm: () => {
      window.open('https://www.paypal.com/fr/home', '_blank');
    },
  });
}

// Get the button:
let mybutton = document.getElementById("btt");

// Scroll to the top of the page on click
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}