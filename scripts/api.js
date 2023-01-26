function getRooms() {
  var xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=roomtype&action=list",
    true
  );
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var rooms = JSON.parse(this.responseText);
      var select = document.getElementById("idRoom");
      for (var i = 0; i < rooms.length; i++) {
        var option = document.createElement("option");
        option.value = rooms[i];
        option.text = rooms[i];
        select.appendChild(option);
      }
    }
  };
}
getRooms();

function postReservation() {
  const modal = document.getElementById("myModal");
  var idRoom = document.getElementById("idRoom").value;
  var dateEntree = document.getElementById("dateEntree").value;
  var dateSortie = document.getElementById("dateSortie").value;
  console.log(dateEntree, dateSortie);
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://tst.quantiq.nc/devweb-cfa/api/index.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    "service=" +
      "gite" +
      "&object=" +
      "roomreservation" +
      "&action=" +
      "create" +
      "&token=" +
      "D@lL@5Mùl!P@5S3" +
      "&idRoom=" +
      idRoom +
      "&dateEntree=" +
      dateEntree +
      "&dateSortie=" +
      dateSortie
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      modal.style.display = "none";
      Swal.fire({
        title: "Réservation effectuée",
        text: "Votre réservation a bien été prise en compte",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#3c913a",
      });
    }
  };
}

function getActivites() {
  var xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=activity&action=list",
    true
  );
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var activites = JSON.parse(this.responseText);
      var select = document.getElementById("activite");
      for (var i = 0; i < activites.length; i++) {
        var option = document.createElement("option");
        option.value = activites[i];
        option.text = activites[i];
        select.appendChild(option);
      }
    }
  };
}
getActivites();

// Reservation Activite
function postActiviteReservation() {
  const modal = document.getElementById("activityModal");
  var activite = document.getElementById("activite").value;
  var date = document.getElementById("date").value;
  var heureDebut = document.getElementById("heureDebut").value;
  var heureFin = document.getElementById("heureFin").value;
  console.log(activite, date, heureDebut, heureFin);
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://tst.quantiq.nc/devweb-cfa/api/index.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(
    "service=" +
      "gite" +
      "&object=" +
      "activityreservation" +
      "&action=" +
      "create" +
      "&token=" +
      "D@lL@5Mùl!P@5S3" +
      "&activite=" +
      activite +
      "&date=" +
      date +
      "&heureDebut=" +
      heureDebut +
      "&heureFin=" +
      heureFin
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      modal.style.display = "none";
      Swal.fire({
        title: "Réservation effectuée",
        text: "Votre réservation a bien été prise en compte",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#3c913a",
      });
    }
  };
}