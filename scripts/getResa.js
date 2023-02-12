getActivites();

// variables
idResa =''

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
        var row = document.createElement("tr");
        var activite = document.createElement("td");
        activite.innerHTML = activites[i].activite;
        activite.classList.add("center-content");
        var date = document.createElement("td");
        date.innerHTML = activites[i].date;
        date.classList.add("center-content");
        var deleteButton = document.createElement("td");
        deleteButton.innerHTML =
          '<button class="btn btn-danger" id='+activites[i].id +' onclick="deleteRaw(event)">Supprimer</button>';
        deleteButton.classList.add("center-content");
        row.appendChild(activite);
        row.appendChild(date);
        row.appendChild(deleteButton);
        table.appendChild(row);
      }
    }
  };
}

function deleteRaw(event) {
  getId = event.target;
  idResa = getId.id
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
      idResa
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("Deleted");
    }
  };
}
