var dateObj = new Date(document.lastModified)
var modDate = dateObj.getDate()
var mm = dateObj.getMonth() + 1 
var modYear = dateObj.getFullYear()
		
var modMonth = (1==mm)?'January':(2==mm)?'February':(3==mm)?'March':(4==mm)?'April':(5==mm)?'May':(6==mm)?'June': (7==mm)?'July':(8==mm)?'August':(9==mm)?'September':(10==mm)?'October':(11==mm)?'November':'December';
 
document.writeln("Last modified:")
document.writeln(modMonth + " " + modDate + ", " + modYear)
