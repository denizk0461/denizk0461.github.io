var gradientColours = ["3DD6D0", "85FF9E", "D36582", "2B59C3", "ff00ff", "C9A690", "47E5BC", "DB5461", "FDE74C", "90A959"];

function applyGradientHeaders(document) {
    var rand1 = Math.floor(Math.random() * gradientColours.length);
    var rand2 = Math.floor(Math.random() * gradientColours.length);
    var gradientStyle = "background: -webkit-linear-gradient(0deg, #" + gradientColours[rand1] + ", #" + gradientColours[rand2] + ");\n" +
    "background-clip: text;\n" +
    "-webkit-background-clip: text;\n" +
    "-webkit-text-fill-color: transparent;";

    var headers = document.getElementsByClassName("gradient-title");

    for (var i = 0; i < headers.length; i += 1) {
        headers[i].style = gradientStyle;
    }
}