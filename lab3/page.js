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
canvas.width = 1000;
canvas.height = 1000;
ctx = canvas.getContext('2d');
var img = new Image();  // Создание нового объекта изображения
img.src = 'image.jpg';
img.onload = function() {
  ctx.drawImage(img, 0, 0);
  body.appendChild(canvas);
}
