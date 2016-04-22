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
    
    var destination = document.getElementById("myContainer");

    var bead = document.createElement("DIV");
    num_beads++;
    bead.className = "bead";
    bead.id = "bead" + String(num_beads);
    destination.appendChild(bead);

 //   var stringDestination = "";
   // var offset = $(".bead").offset().left;
  //  console.log(offset);
   // var numStrings = 0;
    //if (offset <= 60) {
   //   name = "necklaceString" + String(numStrings);
    //  stringDestination = document.getElementById(name);
      //stringDestination = document.getElementById("myContainer");
     // numStrings++;
  //  }
   // var necklaceString = document.createElement("DIV");
   // stringDestination.appendChild(necklaceString);



 //   var content = $('#text').val();
 //   content.id = "content" + String(num_beads);

 //   content.appendTo(bead);

    var content = document.getElementById('text').value;
    document.getElementById(bead.id).innerHTML = content;
//problem: hard to move the text without moving the bead because it's the same DIV
    //content.val(""); also need to delete the content from the input box

  });
});
