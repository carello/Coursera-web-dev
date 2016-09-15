var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");

function generateFaces() {
    for (var i=0; i < numberOfFaces; i++) {
        var make_faces = document.createElement("img");
        var random_spot_top = Math.random() * 400;
        var random_spot_left = Math.random() * 400;
        make_faces.src="smile.png";
        make_faces.style.top = random_spot_top + "px";
        make_faces.style.left = random_spot_left + "px";
        theLeftSide.appendChild(make_faces)[i];
      }
  leftSideImages = theLeftSide.cloneNode(true);
  leftSideImages.removeChild(leftSideImages.lastChild);
  theRightSide.appendChild(leftSideImages);
}
