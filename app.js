
var x = 0;

var courses = Array();
var f = "[";
function add_element_to_array()
{
courses[x] = '\'' + document.getElementById("cCode").value + '\'';

f += "\'" + document.getElementById("cCode").value + "\',";

alert("Course: " + courses[x] + " is added.");
x++;
document.getElementById("cCode").value = "";
return f;
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


function getCourses(){
    
    fs.writeFile('writeME.txt', "courseCodes = ['CSE1001', 'CSE1002', 'CSE1003']\
    from os import listdir\
    from os.path import isfile, join\
    import os\
    \
    \
    def createFolder(directory):\
        try:\
            if not os.path.exists(directory):\
                os.makedirs(directory)\
        except OSError:\
            print('Error: Creating directory. ' + directory)\
    \
    \
    onlyfiles = [f for f in listdir('C:\\Users\\Abhinav\\OneDrive\\Desktop\\abhinavgor.com') if isfile(join('C:\\Users\\Abhinav\\OneDrive\\Desktop\\abhinavgor.com', f))]\
    \
    \
    for i in courseCodes:\
        createFolder(str('C:\\Users\\Abhinav\\OneDrive\\Desktop\\Child\\' + i + '\\'))\
    ",function(err){if(err) throw err; console.log('Updated!')});
    f = f + "]"; 
    //document.write(f);
    // fs.writeFile('writeME.txt','Hello world');
}
