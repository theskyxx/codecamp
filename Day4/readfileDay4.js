let fs = require('fs')
const util = require('util')

const readFileAsync = util.promisify(fs.readFile)
let newText=''
console.log(newText)

async  function gentext (){
  const temp = await readFileAsync('./Text/head.txt', 'utf8');
  newText= newText+temp+'\n'
  const temp1 = await readFileAsync('./Text/body.txt', 'utf8');
  newText= newText+temp1+'\n'
  const temp2 = await readFileAsync('./Text/leg.txt', 'utf8');
  newText= newText+temp2+'\n'
  const temp3 = await readFileAsync('./Text/feet.txt', 'utf8');
  newText= newText+temp3+'\n'
  console.log(newText); 
  fs.writeFile('demofile1.txt', newText, 'utf8', (err) => {
    console.log('write complete!!');
  });
}

 gentext ()



