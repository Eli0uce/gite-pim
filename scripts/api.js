// get idRoom, dateEntree and dateSortie in html form and post the result in the API with the method POST and the url https://tst.quantiq.nc/devweb-cfa/api/index.php?service=gite&object=roomreservation&action=create with xhttp
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
