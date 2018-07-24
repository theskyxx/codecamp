let fs = require('fs')
let newText=''
fs.readFile('./Text/head.txt', 'utf8', (err, data) => {
    newText= newText+data+'\n'
    console.log(newText);
    fs.readFile('./Text/body.txt', 'utf8', (err, data) => {
        newText=newText+ data+'\n'
        console.log(newText);
        fs.readFile('./Text/leg.txt', 'utf8', (err, data) => {
            newText=newText+ data+'\n'
            console.log(newText);
            fs.readFile('./Text/feet.txt', 'utf8', (err, data) => {
                newText=newText+ data+'\n'
                console.log(newText);
                fs.writeFile('demofile1.txt', newText, 'utf8', (err) => {
                    console.log('write complete!!');
                  });                  
            });  
        });  
    });    
});
