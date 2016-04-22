var num_beads = 0

$(document).ready(function() {

  $('li>a[id$="myButtons"]').click(function(event) {
    event.preventDefault();
    var href = $(this).attr('href');
    alert("Are you sure you want to add a button" + href)
  });

  //Adding a Bead

  $('#addBead').click(function() { //toFix: beads overlap, adds to most recently added bead div. shift relationally
    var destination = "";
            if (num_beads == 0) {
                var destination = document.getElementById("myContainer");
            } 
            else {
                name = "bead" + String(num_beads);
                destination = document.getElementById(name);
            }            
            var bead = document.createElement("DIV");
            num_beads++;
            bead.className = "bead";
            bead.id = "bead" + String(num_beads);
            destination.appendChild(bead);
            var necklacestring = document.createElement("necklacestring");


            var screenWidth = $(window).width();
            if (num_beads == 13) {
                destination.appendChild(necklacestring);


            }

      
    });



});


