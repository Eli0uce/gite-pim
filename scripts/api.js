// CREATE //
function roomReserve() {
    const number = document.getElementById("number").value;
    const type = document.getElementById("type").value;
    const landscape = document.getElementById("landscape").value;
    const dateEntree = document.getElementById("dateEntree").value;
    const dateSortie = document.getElementById("dateSortie").value;
  
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://tst.quantiq.nc/devweb-cfa/api/room");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(
      JSON.stringify({
        number: number,
        type: type,
        landscape: landscape,
        dateEntree: dateEntree,
        dateSortie: dateSortie,
      })
    );
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const objects = JSON.parse(this.responseText);
        Swal.fire({title: "Chambre Réservé", text: "Votre chambre a bien été réservé", icon: "success"});
        loadTable();
      }
    };
  }