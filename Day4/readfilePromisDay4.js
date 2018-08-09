let fs = require('fs')
const util = require('util')

const readFileAsync = util.promisify(fs.readFile)


let p1 = new Promise(async (resolve, reject) => {
  const temp = await readFileAsync('./Text/head.txt', 'utf8');
  resolve(temp);
});
let p2 = new Promise(async (resolve, reject) => {
  const temp = await readFileAsync('./Text/body.txt', 'utf8');
  resolve(temp);
});
let p3 = new Promise(async (resolve, reject) => {
  const temp = await readFileAsync('./Text/leg.txt', 'utf8');
  resolve(temp);
});
let p4 = new Promise(async (resolve, reject) => {
  const temp = await readFileAsync('./Text/feet.txt', 'utf8');
  resolve(temp);
});

Promise.all([p1, p2, p3,p4])
.then(function(result){

  console.log('result > ',result); 
  const newText = result
  .reduce( (text,temp)  => {
    //console.log(temp); 
    return text + temp+'\n'
  },"")  

  //newText= newText+temp3+'\n'
  console.log(newText); 


 fs.writeFile('demofilePromis.txt', newText, 'utf8', (err) => {
    console.log('write complete!!');
  }); 
  //console.log('All completed!: ', result); // result = ['one','two','three']

})
.catch(function(error){
  console.error("There's an error", error); 
});






