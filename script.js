/*let formData = new FormData();
formData.append('id', 'value1');
formData.append('key2', 'value2');
var id = document.getElementById("id").value
var nameE = document.getElementById("name").value
var designation = document.getElementById("designation").value
var age = document.getElementById("age").value
var basic = document.getElementById("basic").value
document.write(id + "</br>" + nameE + "</br>" + age + "<br>" + basic)
// List key/value pairs
/*for(let [name, value] of formData) {
  alert(`${name} = ${value}`); // key1 = value1, then key2 = value2
}*/

function getForm() {
   event.preventDefault();
   //storing form data in variables
   var id = document.getElementById("id").value
   var nameE = document.getElementById("name").value
   var designation = document.getElementById("designation").value
   var age = document.getElementById("age").value
   var basic = +document.getElementById("basic").value
   
   //calculations
   var hra = 10/100*basic
   var dam = (basic+hra)
   var da = dam*5/100
   var gp = basic+hra+da
   /*var gp = gpa+da*/
   var pf = 15/100 * basic
   var tax = 20/100 * basic
   var totded = pf + tax
   var np = gp - totded

   /*var output = document.getElementById("output").value*/
   // Generating Output
   var result = "Employee ID: "+id+ "</br>"+"Employee Name: "+nameE +"</br>"+"Employee Designation: "+designation +"<br>"+"Employee Age: "+age +"<br>"+ "<br><br>EARNINGS <br> -------------------------- <br>" + "Basic Pay: "+basic + "<br> HRA: "+hra + "<br> DA: "+da + "<br> Gross Pay: "+gp + "<br> Net Pay: "+np
   /*document.write(result)*/
   document.getElementById("output").innerHTML = result;
}