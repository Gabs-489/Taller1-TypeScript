import {Serie} from './serie.js'
import {series} from './data.js'


let seriesTable: HTMLElement = document.getElementById("tablaSeries")!;

mostrarSeries(series);

function mostrarSeries(ser:Serie[]):void{
    let seriesTbody:HTMLElement = document.createElement("tbody");
    for (let serie of ser)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td class="table-active">${serie.id}</td>
        <td class="table-active"> <a href="" target="_blank"> ${serie.nombre} </a></td>
        <td class="table-active">${serie.canal}</td>
        <td class="table-active">${serie.numTemporadas}</td>`;
        seriesTbody.appendChild(trElement);
    }

    let temporadasP: number = temporadasPromedio(ser);
    let trElement:HTMLElement = document.createElement("p");
    trElement.className = "single-line";
    trElement.innerHTML = `Seasons average: ${temporadasP}`;
    seriesTbody.appendChild(trElement);
    seriesTable.appendChild(seriesTbody);

}

function temporadasPromedio(ser:Serie[]):number{
    let promedio:number = 0;
    for(let serie of ser)
    {
        promedio+=serie.numTemporadas;
    }

    promedio=Math.floor(promedio/ser.length);
    return promedio;
}