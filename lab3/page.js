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
  pics[2].y = pics[3].y = Math.floor(canvas.height / 2);
  pics[1].x = pics[3].x = Math.floor(canvas.width / 2);

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

function drawQuote() {
  $.getJSON(
    "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
  ).done(response => {
    let maxLineWidth = canvas.width * 0.5;
    let quoteText = response.quoteText;
    let words = quoteText.split(' ');
    console.log(words);
    let lines = [];
    let line = '';
    for (let i = 0; i < words.length; i++) {
      let newLine = line + words[i];
      let newLineWidth = context.measureText(newLine).width;
      if (newLineWidth > maxLineWidth) {
        lines.push(line);
        line = words[i] + ' ';
      } else {
        line = newLine + ' ';
      }
    }
    lines.push(line);
    console.log(lines);

    let x = Math.floor(canvas.width / 2);
    for (let i = 0; i < lines.length; i++) {
      let y;
      if (lines.length == 1) {
        y = Math.floor(canvas.height / 2) + 25;
      } else {
        y = Math.floor(canvas.height / 2) + 25 +
          Math.floor(50 * lines.length * (i / (lines.length - 1) - 1 / 2));
      }

      context.lineWidth = 3;
      context.strokeText(lines[i], x, y);
      context.lineWidth = 1;
      context.fillText(lines[i], x, y);
    }
  });
}

drawImages();
drawQuote();
