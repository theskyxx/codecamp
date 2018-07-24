fetch('data.json').then(response => {
    return response.json();
})
.then(myJson => {
    let peopleSalary = myJson
    let NewPeople = {}
    function filterSalay(people) {
        return (people.salary >= 100000);
     }

     function filterLowSalay(people) {
        return (people.salary < 100000);
     }
     

     function mapSalay (people) {   
        people.salary = people.salary*2
        return people ;
      }


      function gentable(table) {
        let text = ''
        let row= ''
        let header= ''
        let tableName = "#"+table || ''

            for (x in peopleSalary) {
                text = '<tr>'
                header=''
                for (r in peopleSalary[x]){
                    //console.log(myJson[x][r])          
                    if (r != "company"){
                        header = header +'<th>'+r+'</th>'   
                        text = text +'<td>'+peopleSalary[x][r]+'</td>'   
                    }                                    
                    //console.log(text)
                }
            text = text + '</tr>'         
            row=row+text
            }
            //console.log(row);
            $(tableName).append(header);   
            $(tableName).append(row);   
        }

      function reduleSalay (salay,people) {
        return salay + Number(people.salary);
      }
      

      gentable("myTableOld")
      
      const SalayOld = peopleSalary
      .reduce(reduleSalay,0)  
      console.log('cal salary old all  ' + SalayOld); 
      
    const peopleNew = peopleSalary
    .filter(filterSalay)    
    .map(mapSalay)
    console.log('cal people new ');     
    console.log(peopleNew);     

    //console.log(' people old ');     
    //console.log(peopleSalary);     

       
    //const SalayNew = peopleNew    
    //.reduce(reduleSalay,0)  
    //onsole.log('cal salary new >= 10000.. ' + SalayNew);  

    const peoplNewSalay = peopleSalary     
    .reduce(reduleSalay,0)  
    console.log('cal salary new < 10000.. ' + peoplNewSalay);  
    //debugger
    let diff = peoplNewSalay-SalayOld
    console.log('old  :'+ SalayOld) 
    console.log('new  :'+ peoplNewSalay) 
    console.log('diff :'+ diff) 
    
    gentable("myTableNew")
})
.catch(error => {
    console.error('Error:', error);
});
