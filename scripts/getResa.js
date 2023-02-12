getActivites();
getRooms();

// variables
idActivityReservation ='';
idRoomReservation = '';

// résa activitées
function getActivites() {
  var xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=activityreservation&action=list",
    true
  );
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var activites = JSON.parse(this.responseText);
      var table = document.getElementById("table-responsive");
      for (var i = 0; i < activites.length; i++) {
        var rowActivity = document.createElement("tr");

        // activité
        var activite = document.createElement("td");
        activite.innerHTML = activites[i].activite;
        activite.classList.add("center-content");

        // date
        var date = document.createElement("td");
        date.innerHTML = activites[i].date;
        date.classList.add("center-content");

        // bouton Del
        var deleteButton = document.createElement("td");
        deleteButton.innerHTML =
          '<button class="btn btn-danger" id='+activites[i].id +' onclick="deleteRaw(event)">Supprimer</button>';
        deleteButton.classList.add("center-content");

        rowActivity.appendChild(activite);
        rowActivity.appendChild(date);
        rowActivity.appendChild(deleteButton);
        table.appendChild(rowActivity);
      }
    }
  };
}

function deleteRaw(event) {
  getId = event.target;
  idActivityReservation = getId.id
  Swal.fire({
    title: "Êtes-vous sûr?",
    text: "Vous ne pourrez pas revenir en arrière!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3c913a",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui, supprimez-le!",
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        title: "Supprimé!",
        text: "Votre réservation a bien été supprimée.",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      deleteInAPI();
    }
  });
}

// function to delete resa activité
function deleteInAPI() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://tst.quantiq.nc/devweb-cfa/api/index.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    "service=" +
      "gite" +
      "&object=" +
      "activityreservation" +
      "&action=" +
      "cancel" +
      "&token=" +
      "D@lL@5Mùl!P@5S3" +
      "&idActivityReservation=" +
      idActivityReservation
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Deleted");
    }
  };
}

// résa room
function getRooms() {
  var xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=roomreservation&action=list",
    true
  );
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.response)
      var rooms = JSON.parse(this.responseText);
      var table = document.getElementById("roomTable");
      for (var i = 0; i < rooms.length; i++) {
        var rowRoom = document.createElement("tr");

        // numéro de chambre
        var number = document.createElement("td");
        number.innerHTML = rooms[i].number;
        number.classList.add("center-content");

        // type de chambre
        var room = document.createElement("td");
        room.innerHTML = rooms[i].type;
        room.classList.add("center-content");

        // vue
        var landscape = document.createElement("td");
        landscape.innerHTML = rooms[i].landscape;
        landscape.classList.add("center-content");

        // date d'entrée
        var roomDateIn = document.createElement("td");
        roomDateIn.innerHTML = rooms[i].dateEntree;
        roomDateIn.classList.add("center-content");

        // date de sortie
        var roomDateOut = document.createElement("td");
        roomDateOut.innerHTML = rooms[i].dateSortie;
        roomDateOut.classList.add("center-content");

        // bouton Del
        var deleteButton = document.createElement("td");
        deleteButton.innerHTML =
          '<button class="btn btn-danger" id='+rooms[i].id +' onclick="deleteRaw(event)">Supprimer</button>';
        deleteButton.classList.add("center-content");

        rowRoom.appendChild(number);
        rowRoom.appendChild(room);
        rowRoom.appendChild(landscape);
        rowRoom.appendChild(roomDateIn);
        rowRoom.appendChild(roomDateOut);
        rowRoom.appendChild(deleteButton);
        table.appendChild(rowRoom);
      }
    }
  };
}

function deleteRaw(event) {
  getId = event.target;
  idActivityReservation = getId.id
  Swal.fire({
    title: "Êtes-vous sûr?",
    text: "Vous ne pourrez pas revenir en arrière!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3c913a",
    cancelButtonColor: "#d33",
    confirmButtonText: "Oui, supprimez-le!",
  }).then((result) => {
    if (result.value) {
      Swal.fire({
        title: "Supprimé!",
        text: "Votre réservation a bien été supprimée.",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      deleteInAPI();
    }
  });
}

// function to delete resa activité
function deleteInAPI() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://tst.quantiq.nc/devweb-cfa/api/index.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    "service=" +
      "gite" +
      "&object=" +
      "activityreservation" +
      "&action=" +
      "cancel" +
      "&token=" +
      "D@lL@5Mùl!P@5S3" +
      "&idActivityReservation=" +
      idActivityReservation
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Deleted");
    }
  };
}

