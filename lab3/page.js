var body = document.getElementsByTagName("body")[0];

var generateButton = document.createElement("input");
generateButton.value = "Generate collage";
generateButton.id = "generate";
generateButton.type = "button";
body.appendChild(generateButton);

var saveButton = document.createElement("input");
saveButton.value = "Save";
saveButton.id = "save";
saveButton.type = "button";
body.appendChild(saveButton);

body.appendChild(document.createElement("br"));

canvas = document.createElement("canvas");
canvas.width = 1500;
canvas.height = 650;
body.appendChild(canvas);

context = canvas.getContext('2d');
context.font = "bold 50px sans-serif";
context.strokeStyle = "white";
context.textAlign = "center";

pic = new Image();
pic.src = 
  "https://source.unsplash.com/random/" +
  canvas.width +
  "x" +
  canvas.height +
  "?sig=" +
  Math.floor(Math.random() * 10000);
pic.onload = function() {
  context.drawImage(pic, 0, 0);
}
