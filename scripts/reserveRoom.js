function showReserveRoomBox() {
  Swal.fire({
    title: "Réservation",
    html:
      '<input id="id" type="hidden">' +
      '<input id="name" class="swal2-input" placeholder="Prénom">' +
      '<input id="last_name" class="swal2-input" placeholder="Nom">' +
      '<input type="datetime" id="date_debut" class="swal2-input" placeholder="Date de début">' +
      '<input type="datetime" id="date_fin" class="swal2-input" placeholder="Date de fin">' +
      '<select id="rooms"><option value="onechambre">1 Chambre</option></select>' +
      '<select id="number"><option value="one">1 personne</option></select>',
    focusConfirm: false,
    preConfirm: () => {
      reserveRoomAdd();
    },
  });
}
