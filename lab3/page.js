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

function drawImages() {
  let pics = [];
  for (let i = 0; i < 4; i++) {
    pics[i] = { img: new Image() };
  }

  pics[0].x = pics[0].y = pics[1].y = pics[2].x = 0;
  pics[2].y = pics[3].y = 325;
  pics[1].x = pics[3].x = 750;

  let count = 0;
  for (i = 0; i < 4; i++) {
    let pic = pics[i];
    pic.img.src =
      "https://source.unsplash.com/random/" +
      750 +
      "x" +
      325 +
      "?sig=" +
      Math.floor(Math.random() * 10000);

    pic.img.onload = () => {
      count++;
      if (count == 4) {
        for (j = 0; j < 4; j++) {
          context.drawImage(pics[j].img, pics[j].x, pics[j].y);
        }
      }
    }
  }
}

drawImages();
