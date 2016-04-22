var num_beads = 0

$(document).ready(function() {

  $('li>a[id$="myButtons"]').click(function(event) {
    event.preventDefault();
    var href = $(this).attr('href');
    alert("Are you sure you want to add a button" + href)
  });

  //Adding a Bead and String

    var num_beads = 0

  $('#addBead').click(function() { //toFix: beads overlap, adds to most recently added bead div. shift relationally
    var destination = "";
<<<<<<< HEAD
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
=======
    
    var destination = document.getElementById("myContainer");
>>>>>>> c2ea986d5a4e9d5c3291830d01a429ac17256203

    var bead = document.createElement("DIV");
    num_beads++;
    bead.className = "bead";
    bead.id = "bead" + String(num_beads);
    destination.appendChild(bead);

<<<<<<< HEAD

});
=======
    var stringDestination = "";
    var offset = $(".bead").offset().left;
    console.log(offset);
    var numStrings = 0;
    if (offset <= 60) {
      name = "necklaceString" + String(numStrings);
      stringDestination = document.getElementById(name);
      //stringDestination = document.getElementById("myContainer");
      numStrings++;
    }
    var necklaceString = document.createElement("DIV");
    stringDestination.appendChild(necklaceString);
>>>>>>> c2ea986d5a4e9d5c3291830d01a429ac17256203

    var text = $('#text').val();



  });
});
