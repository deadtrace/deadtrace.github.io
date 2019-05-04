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