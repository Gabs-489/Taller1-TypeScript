import { series } from './data.js';
var seriesTable = document.getElementById("tablaSeries");
mostrarSeries(series);
function mostrarSeries(ser) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, ser_1 = ser; _i < ser_1.length; _i++) {
        var serie = ser_1[_i];
        var trElement_1 = document.createElement("tr");
        trElement_1.innerHTML = "<td class=\"table-active\">".concat(serie.id, "</td>\n        <td class=\"table-active\"> <a href=\"\" target=\"_blank\"> ").concat(serie.nombre, " </a></td>\n        <td class=\"table-active\">").concat(serie.canal, "</td>\n        <td class=\"table-active\">").concat(serie.numTemporadas, "</td>");
        seriesTbody.appendChild(trElement_1);
    }
    var temporadasP = temporadasPromedio(ser);
    var trElement = document.createElement("p");
    trElement.className = "single-line";
    trElement.innerHTML = "Seasons average: ".concat(temporadasP);
    seriesTbody.appendChild(trElement);
    seriesTable.appendChild(seriesTbody);
}
function temporadasPromedio(ser) {
    var promedio = 0;
    for (var _i = 0, ser_2 = ser; _i < ser_2.length; _i++) {
        var serie = ser_2[_i];
        promedio += serie.numTemporadas;
    }
    promedio = Math.floor(promedio / ser.length);
    return promedio;
}
