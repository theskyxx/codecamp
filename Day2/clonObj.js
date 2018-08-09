fetch('dataemp.json').then(response => {
    return response.json();
})
.then(myJson => {
    console.log(myJson);
    let text
    let row
    let header
    let newEmployees = {}
    for (x in myJson) {         
        for (r in myJson[x]){
            newEmployees[r] = myJson[x][r] ; 
        }
     
    }

    newEmployees.yearsalay= newEmployees.salary*12
    console.log(newEmployees)
    console.log(myJson)
          
})
.catch(error => {
    console.error('Error:', error);
});
