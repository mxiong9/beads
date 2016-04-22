var num_beads = 0; 
// var numStrings = 0; //not currently counting strings


$(document).ready(function() {

  $('li>a[id$="myButtons"]').click(function(event) {
    event.preventDefault();
    var href = $(this).attr('href');
    alert("Are you sure you want to add a button" + href)
  });

  //Adding a Bead and String

  $('#addBead').click(function() { //toFix: beads overlap, adds to most recently added bead div. shif relationally
    var lastBead; //the last bead div added to the html file
    var windowProportion;
    var beadSize = 60; //will eventually get the information from the css   
    var windowWidth = $(window).width(); 
    var destination = document.getElementById("myContainer");

    if ($('.bead').length != 0){ //if there are beads already on the page
        lastBead = $( ".bead" ).last(); 
        var lastOffset = lastBead.offset().left;
        windowProportion = (lastOffset + beadSize)/windowWidth; //temp solution
        console.log("lastOffset", lastOffset);
    } else {
        windowProportion = 0;
    } 

    /*when the amount of the screen taken by adding a bead
     exceeds 90% (only works on some sizes), add a new string*/
    if (windowProportion > 0.9){ 
        addString();
    } 
  
    /*add the new bead*/
    var bead = document.createElement("DIV");
    num_beads++;
    bead.className = "bead";
    bead.id = "bead" + String(num_beads);
    destination.appendChild(bead); 
    console.log("num_beads", num_beads);   

     //add text (problem: hard to move the text because the text is the same DIV as the bead)
    var content = document.getElementById('text').value;
    document.getElementById(bead.id).innerHTML = content; 
    //to be done: need to delete the content from the textarea once the button is  
  });
});

function addString(){
    var destination = document.getElementById("myContainer");
    var string = document.createElement("DIV");
    destination.appendChild(string);
    // string.name = "necklaceString" + String(numStrings);
    string.className = "necklaceString";
    // numStrings++; //not currently counting strings    
}
