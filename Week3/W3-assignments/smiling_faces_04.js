var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];

function clean_leftface() {
  while (theLeftSide.childNodes[2])
    theLeftSide.removeChild(theLeftSide.lastChild);
  }

function clean_rightface() {
  while (theRightSide.firstChild)
      theRightSide.removeChild(theRightSide.lastChild);
  }


function generateFaces() {
    for (var i=0; i < numberOfFaces; i++) {
        var make_faces = document.createElement("img");
        var random_spot_top = Math.random() * 400;
        var random_spot_left = Math.random() * 400;
        make_faces.src="smile.png";
        make_faces.style.top = random_spot_top + "px";
        make_faces.style.left = random_spot_left + "px";
        theLeftSide.appendChild(make_faces)[i];
      };

    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.onclick =
        function nextLevel(event) {
          event.stopPropagation();
          //theLeftSide.removeChild(theLeftSide.lastChild);
          theRightSide.removeChild(theRightSide.lastChild);
          clean_leftface();
          //clean_rightface();
          //alert("TEST")
          //console.log("TEST")
          numberOfFaces += 5;
          generateFaces();

        };

  theBody.onclick = function gameOver() {
      alert("Game Over!");
      theBody.onclick = null;
      theLeftSide.lastChild.onClick = null;
      //clean_leftface();
      //clean_rightface();
      //location.reload();
    };
}
