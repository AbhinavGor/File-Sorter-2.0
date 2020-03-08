
var x = 0;
var courses = Array();

function add_element_to_array()
{
courses[x] = '\'' + document.getElementById("cCode").value + '\'';
alert("Course: " + courses[x] + " is added.");
x++;
document.getElementById("cCode").value = "";
}

function display_array()
{
var e = "<hr/>";   

for (var y=0; y<courses.length; y++)
{
e += "Course " + (y + 1) + " = " + courses[y] + "<br/>";
}
document.getElementById("Result").innerHTML = e;
}

function getCourses()
{
// myString = "courseCodes = [" + courses + "]";
// document.getElementById('d').innerHTML = myString;
var fs = require('fs');
var data = fs.readFileSync('index.txt', 'utf8')
// document.write(data);
console.log(data);
}


// var c = document.getElementById('code');
// var displaySetting = c.style.display;
// displaySetting = 'block';   
