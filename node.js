var getCourse = function getCourses()
{
// myString = "courseCodes = [" + courses + "]";
// document.getElementById('d').innerHTML = myString;
var fs = require('fs');
var data = fs.readFileSync('index.txt', 'utf8')
document.write(data);
}

module.exports.getCourse = getCourse;