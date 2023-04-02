function getJson(){
    
    fetch("dados.json").then((response) => {
        response.json().then((faturamento) => {
           console.log(faturamento);
        })
    })

}