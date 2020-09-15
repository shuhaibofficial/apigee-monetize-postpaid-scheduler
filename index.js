const fs = require('fs');
const readline = require('readline');
const csv = require('csv-parser');
const { resolve } = require('path');
let From = '';
let To = '';
csvdata =[];
filterData={};


function csvByCsvParser()
{  
const results = [];

return new Promise((resolve,reject)=>{

  fs.createReadStream('./Data/revenu-sample-data.csv')
  .pipe(csv({
    skipLines: 7 
  }))
  .on('data', (data) => results.push(data))
  .on('end', () => {
    
    resolve(results);
   
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });

}); 

  
}

async function combine()
{
  try{
  const abc = await processLineByLine();
  //console.log(abc);
  const bcd = await csvByCsvParser();
  //console.log(bcd);
  abc['MintData'] = bcd;
  fs.writeFileSync('./Data/data2.txt', JSON.stringify(abc) , 'utf-8');
  const test_json =JSON.stringify(abc);
  //console.log(abc);
  }
  catch(err)
  {
    console.log(err);
  }
  
}





async function processLineByLine() {
  const fileStream = fs.createReadStream('./Data/revenu-sample-data.csv');
  let filterData={};

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    if (line.includes('From:'))
    {
        
        From=line.replace(/\s/g, '').split(':,')[2].split(',To')[0];
        To=line.replace(/\s/g, '').split(':,')[3];
    }
    if(line.includes('API Product:,'))
        
    {
        //console.log(line.split(':,')[1]);
        filterData["APIProduct"]=line.split(':,')[1];
    }
    if(line.includes('Developer:,'))
    {
        filterData["Developer"]=line.split(':,')[1];
    }
    if(line.includes('Application:,'))
    {
        filterData["Application"]=line.split(':,')[1];
    }      
    if(line.includes('Currency:,'))
    {
        filterData["Currency"]=line.split(':,')[1];
    }
    if(line.includes('Type of Report:,'))
    {
        filterData["TypeofReport"]=line.split(':,')[1];
    }                 
    //console.log(`Line from file: ${line}`);
  }

  let text = '{ "From" : "' +From+'","To" :"'+To+'"}';
  let obj = JSON.parse(text);
  console.log(JSON.stringify(filterData));
  //console.log(obj);
  obj["Filter"]= filterData;

return obj;

}

combine();
    



