function encriptar() {
  let text = document.getElementById("text-input").value.toLowerCase();
  if (text === "") {
    alert("Debe escribir un mensaje");
  } else {
    document.getElementById("nomsg-image").style.display = "none";
    let newText = "";
    for (var i = 0; i < text.length; i++) {
      switch (text[i]) {
        case "a":
          newText += "ai";
          break;
        case "e":
          newText += "enter";
          break;
        case "i":
          newText += "imes";
          break;
        case "o":
          newText += "ober";
          break;
        case "u":
          newText += "ufat";
          break;
        default:
          newText += text[i];
      }
    }
    document.getElementById("text-output").textContent = newText;
  }
}

const dictionary = {
  ai: "a",
  enter: "e",
  imes: "i",
  ober: "o",
  ufat: "u",
};

function desencriptar() {
  let text = document.getElementById("text-input").value;
  if (text === "") {
    alert("Debe escribir un mensaje");
  } else {
    document.getElementById("nomsg-image").style.display = "none";
    Object.keys(dictionary).forEach((key) => {
      text = text.replaceAll(key, dictionary[key]);
    });
  }
  document.getElementById("text-output").textContent = text;
}

function copyToClipboard() {
  var textToCopy = document.getElementById("text-output").value;
  navigator.clipboard.writeText(textToCopy).then(
    function () {
      console.log("Texto Copiado");
    },
    function (err) {
      console.log("No fue posible copiar ", err);
    }
  );
}
