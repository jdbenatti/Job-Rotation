function showResultString(){

    var palavra = document.getElementById('getString').value;

    const invert = palavra.split("");

    for(var i = (invert.length - 1); i>= 0; i--){
        console.log(invert[i]);
    }   

}