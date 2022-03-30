function dlithe()
{
    alert("Wlcome");
}
function dlithe1()
{
    document.write("Welcome to DLithe Boot Camp");
}
function example()
{
    alert("Enter valid name");
}

function conditional(){
    var name=prompt("Enter your name");
            var mark=prompt("Enter your Score");
            document.write("A. IF-ELSE<br>");
            if(mark>=85 && mark<=100)
            {
                document.write("Hello "+name+"<br>");
                document.write("Your score:"+mark+"<br>And your grade is: Distinction<br>");
            }
            else if(mark>=60&&mark<85)
            {
                document.write("Hello "+name+"<br>");
                document.write("Your score:"+mark+"<br>"+"And your grade is: First Class<br>");
            }
            else if(mark>=50&&mark<60)
            {
                document.write("Hello "+name+"<br>");
                document.write("Your score:"+mark+"<br>And your grade is: Second Class<br>");
            }
            else if(mark>=35&&mark<50)
            {
                document.write("Hello "+name+"<br>");
                document.write("Your score:"+mark+"<br>And your grade is: Third Class<br>");  
            }
            else if(mark>=0 && mark<35)
            {
                document.write("Hello "+name+"<br>");
                document.write("Your score:"+mark+"<br>And your grade is: Fail<br>");  
            }
            else
            {
                document.write("Invalid mark entered<br>"); 
            }
            document.write("<br>B.SWITCH<br>");
        
            switch(mark)
            {
            case 0:if(mark>=85 &&mark <=100)
                document.write("Your grade is:A+");
                break;
            case 1:if(mark>=60&&mark<85)
                document.write("Your grade is:A");
                break;
            case 2:if(mark>=50&&mark<60)
                document.write("Your grade is:B");
                break;
            case 3:if(mark>=35&&mark<50)
                document.write("Your grade is:C");
                break;
            case 4:if(mark>=0&&mark<35)
                document.write("Your grade is:C");
                break;
            default:document.write("Invalid Score");
            }
            document.write("<br><button onclick=window.location='task10.html'>Back</button>");
}
