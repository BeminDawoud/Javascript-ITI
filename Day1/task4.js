name = 12

while(isFinite(name)){
  name = prompt("what is your name")
}

birth = 2050

while(isNaN(birth) || birth > 2010){
  birth = parseInt(prompt("what is you birth year"))
}

age = 2024 - birth


document.write("<table style=' border: 1px solid black;'>");

document.write("<tr><td style='border: 1px solid black;'><strong>Name:</strong></td><td style='border: 1px solid black;'>" + name + "</td></tr>");

document.write("<tr><td style='border: 1px solid black;'><strong>Birth year:</strong></td><td style='border: 1px solid black;'>" + birth + "</td></tr>");

document.write("<tr><td style='border: 1px solid black;'><strong>Age:</strong></td><td style='border: 1px solid black;'>" + age + "</td></tr>");

document.write("</table>");