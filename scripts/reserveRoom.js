function showReserveRoomBox() {
  Swal.fire({
    title: "Réservation",
    html:
      '<input id="id" type="hidden">' +
      '<input id="name" class="swal2-input" placeholder="Prénom">' +
      '<input id="last_name" class="swal2-input" placeholder="Nom">' +
      '<label for="date_debut">Date de début</label>' +
      '<input type="datetime-local" id="date_debut" class="swal2-input">' +
      '<label for="date_fin">Date de fin</label>' +
      '<input type="datetime-local" id="date_fin" class="swal2-input">' +
      '<select id="rooms"><option value="onechambre">1 Chambre</option></select>' +
      '<select id="number"><option value="one">1 personne</option></select>',
    focusConfirm: false,
    // preConfirm: () => {
    //   reserveRoomAdd();
    // },
  });
}
