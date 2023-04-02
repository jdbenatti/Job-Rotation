var SP = 67836.43;
var RJ = 36678.66;
var MG = 29229.88;
var ES = 27165.48;
var Outros = 19849.53;

function showResult(){

    var total = SP + RJ + MG + ES + Outros;

    console.log("Valor Total Mensal: " + total);
    console.log("Porcentagem SP: " + ((SP /total)*100).toFixed(1) + "%");
    console.log("Porcentagem RJ: " + ((RJ /total)*100).toFixed(1) + "%");
    console.log("Porcentagem MG: " + ((MG /total)*100).toFixed(1) + "%");
    console.log("Porcentagem ES: " + ((ES /total)*100).toFixed(1) + "%");
    console.log("Porcentagem Outros: " + ((Outros /total)*100).toFixed(1) + "%");
}