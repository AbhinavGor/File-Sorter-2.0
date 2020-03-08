var fs = require('fs');

var readMe = fs.readFileSync('index.txt', 'utf8',function(err,data){
    console.log(data);
});
//console.log(readMe);


fs.writeFileSync('writeMe.txt', readMe, 'utf8');